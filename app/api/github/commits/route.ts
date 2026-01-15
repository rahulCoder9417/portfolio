import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com/graphql";

export async function GET() {
  const token = process.env.GITHUB_TOKEN!;
  const username = process.env.GITHUB_USERNAME!;

  const now = new Date();
  const from = new Date();
  from.setDate(now.getDate() - 31);

  // Query for last 31 days
  const recentQuery = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  // Query for total lifetime contributions
  const totalQuery = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  try {
    // Fetch recent contributions
    const recentRes = await fetch(GITHUB_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: recentQuery,
        variables: {
          login: username,
          from: from.toISOString(),
          to: now.toISOString(),
        },
      }),
    });

    // Fetch total contributions
    const totalRes = await fetch(GITHUB_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: totalQuery,
        variables: {
          login: username,
        },
      }),
    });

    if (!recentRes.ok || !totalRes.ok) {
      return NextResponse.json({ error: "GitHub API error" }, { status: 500 });
    }

    const recentJson = await recentRes.json();
    const totalJson = await totalRes.json();

    // Check for GraphQL errors
    if (recentJson.errors || totalJson.errors) {
      console.error("GraphQL errors:", recentJson.errors || totalJson.errors);
      return NextResponse.json({ error: "GraphQL query error" }, { status: 500 });
    }

    // Get all days from the response
    const allDays =
      recentJson.data.user.contributionsCollection.contributionCalendar.weeks
        .flatMap((week: any) => week.contributionDays);

    // Get exactly the last 31 days
    const dailyCommits = allDays
      .slice(-31)
      .map((d: any) => ({
        date: d.date,
        count: d.contributionCount,
      }));

    // Get total lifetime contributions
    const totalCommits =
      totalJson.data.user.contributionsCollection.contributionCalendar.totalContributions;

    return NextResponse.json(
      {
        dailyCommits,
        totalCommits,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
      }
    );
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}