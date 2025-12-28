import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com/graphql";

export async function GET() {
  const token = process.env.GITHUB_TOKEN!;
  const username = process.env.GITHUB_USERNAME!;

  const now = new Date();
  const from = new Date();
  from.setDate(now.getDate() - 31);

  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
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

  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        login: username,
        from: from.toISOString(),
        to: now.toISOString(),
      },
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "GitHub API error" }, { status: 500 });
  }

  const json = await res.json();

  const days =
    json.data.user.contributionsCollection.contributionCalendar.weeks
      .flatMap((week: any) => week.contributionDays)
      .slice(-31);

  const dailyCommits = days.map((d: any) => ({
    date: d.date,
    count: d.contributionCount,
  }));

  const totalCommits =
    json.data.user.contributionsCollection.contributionCalendar.totalContributions;

  return NextResponse.json({
    dailyCommits,
    totalCommits,
  });
}
