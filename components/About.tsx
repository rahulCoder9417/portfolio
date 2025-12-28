"use client";

import { useEffect, useState } from "react";
import { config } from "@/utlis/config";
import {
  Code2,
  Server,
  Network,
  Link as LucideLink,
} from "lucide-react";

/* ---------------- Types ---------------- */

type CommitDay = {
  date: string;
  count: number;
};

/* ---------------- Helpers ---------------- */

const commitShade = (count: number) => {
  if (count === 0) return "bg-muted";
  if (count === 1) return "bg-primary/30";
  if (count === 2) return "bg-primary/50";
  if (count === 3) return "bg-primary/70";
  return "bg-primary";
};

/* ---------------- Config ---------------- */

const coreExpertise = config.coreExpertise;
const techStack = config.techStack;
const architecture = config.architecture;
const leetCodeStats = config.leetCodeStats;
const about = config.about;

/* ---------------- Component ---------------- */

const About = () => {
  const [commits, setCommits] = useState<CommitDay[]>([]);
  const [totalCommits, setTotalCommits] = useState<number>(0);
  const [loadingCommits, setLoadingCommits] = useState(true);

  /* -------- Fetch GitHub Commits -------- */

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch("/api/github/commits");
        if (!res.ok) throw new Error("Failed to fetch commits");

        const data = await res.json();
        setCommits(data.dailyCommits);
        setTotalCommits(data.totalCommits);
      } catch (err) {
        console.error("GitHub commit fetch error:", err);
      } finally {
        setLoadingCommits(false);
      }
    };

    fetchCommits();
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= Header ================= */}
        <div className="space-y-4">
          <span className="text-sm uppercase tracking-widest text-primary">
            About Me
          </span>

          <div className="flex flex-col mt-4 md:flex-row md:items-center md:gap-6">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              I’m <span className="text-gradient">Rahul</span>
            </h2>

            <div className="mt-2 md:mt-0 flex gap-3 text-xs md:text-sm text-muted-foreground">
              <span>{about.age} yrs</span>
              <span>•</span>
              <span>{about.status}</span>
              <span>•</span>
              <span className="text-primary/70">Open to work</span>
            </div>
          </div>
        </div>

        {/* ================= Core + Tech ================= */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Core Expertise */}
          <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Code2 className="text-primary" />
              Core Expertise
            </h3>

            <ul className="space-y-3">
              {coreExpertise.map(skill => (
                <li
                  key={skill}
                  className="text-lg font-medium flex items-center gap-3"
                >
                  <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Server className="text-primary" />
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {techStack.primary.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold
                             hover:bg-primary hover:text-primary-foreground
                             hover:shadow-glow transition"
                >
                  {skill}
                </span>
              ))}

              {techStack.secondary.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-muted text-muted-foreground
                             hover:text-foreground transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= Architecture ================= */}
        <div className="p-10 rounded-2xl bg-card border border-border shadow-card">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Network className="text-primary" />
            Systems & Architecture
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            {architecture.map(item => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* ================= Stats ================= */}
        <div className="flex gap-14 justify-center flex-wrap">

          {/* LeetCode */}
          <div className="p-8 rounded-2xl bg-card border border-border shadow-card flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-2">LeetCode</h4>
            <p className="text-4xl font-bold text-gradient">
              {leetCodeStats.solved}+
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Easy {leetCodeStats.easy} • Medium {leetCodeStats.medium} • Hard {leetCodeStats.hard}
            </p>
            <a
              href="https://leetcode.com/user7867575/"
              target="_blank"
              className="mt-2 hover:scale-105 transition"
            >
              <LucideLink className="text-primary" />
            </a>
          </div>

          {/* GitHub Commits */}
          <div className="p-8 rounded-2xl bg-card border border-border shadow-card min-w-[320px]">

            <h4 className="text-lg font-semibold mb-4">
              GitHub · Last 31 Days
            </h4>

            <div className="flex gap-6 items-start">
              {/* Grid */}
              {loadingCommits ? (
                <div className="text-sm text-muted-foreground">
                  Loading GitHub activity…
                </div>
              ) : (
                <div className="grid grid-cols-5 gap-x-[6px] gap-y-[6px]">
                  {commits.map(({ count, date }, index) => (
                    <div key={index} className="group relative">
                      <div
                        className={`h-5 w-5 rounded-sm ${commitShade(count)}
                                    transition-transform group-hover:scale-110`}
                      />

                      {/* Tooltip */}
                      <div
                        className="pointer-events-none absolute -top-8 z-10 left-1/2 -translate-x-1/2
                                   rounded-md bg-background px-2 py-0.5 text-xs
                                   border border-border opacity-0 scale-95
                                   group-hover:opacity-100 group-hover:scale-100 transition"
                      >
                        {count} commit{count !== 1 ? "s" : ""}<br />
                        <span className="text-muted-foreground">{date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Legend + Total */}
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="flex gap-[1px]">
                    <div className="h-3 w-3 bg-muted rounded-sm" />
                    <div className="h-3 w-3 bg-primary/20 rounded-sm" />
                    <div className="h-3 w-3 bg-primary/40 rounded-sm" />
                    <div className="h-3 w-3 bg-primary/60 rounded-sm" />
                    <div className="h-3 w-3 bg-primary rounded-sm" />
                  </div>
                  <span>More</span>
                </div>

                <div>
                  Total commits:{" "}
                  <span className="text-foreground font-medium">
                    {totalCommits}
                  </span>
                </div>

                <a
                  href="https://github.com/rahulCoder9417"
                  target="_blank"
                  className="hover:text-primary transition"
                >
                  Open GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
