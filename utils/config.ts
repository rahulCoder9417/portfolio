import { Github, Linkedin, Mail, Twitter, Phone } from "lucide-react";

// ============================================================
//  PORTFOLIO CONFIG — Single source of truth
//  Change everything here. Components read from this file.
// ============================================================

export const config = {
  // ─── Personal ──────────────────────────────────────────────
  name: "Rahul Kumar",
  logo: "RK",                       // shown in the navbar
  title: "Full-Stack Engineer",
  resumePath: "/Resume.pdf",

  // ─── SEO / Metadata ───────────────────────────────────────
  seo: {
    title: "Rahul Kumar — Full-Stack Engineer",
    description:
      "Full-stack engineer building scalable APIs, real-time WebSocket architectures, and production-ready web applications.",
  },

  // ─── Hero ──────────────────────────────────────────────────
  hero: {
    greeting: "Hi, I'm",
    subtitle:
      "Full-stack engineer with strong DSA foundations, building scalable APIs, real-time WebSocket architectures, and production-ready web applications.",
    highlightWords: ["Full-stack engineer", "DSA", "real-time WebSocket"],
  },

  // ─── Navigation ────────────────────────────────────────────
  navLinks: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ],

  // ─── About ─────────────────────────────────────────────────
  about: {
    age: 19,
    status: "BCA Student",
    open_to_work: true,
  },

  // ─── Tech Stack ────────────────────────────────────────────
  techStack: {
    primary: [
      "Next.js", "Node.js", "Yjs", "WebSockets", "React.js",
      "JavaScript", "TypeScript", "Prisma", "RTK", "Postgres SQL",
      "Redis", "Express", "Fastify", "Drizzle", "Docker", "Git", "Mongo DB",
    ],
    secondary: ["Python", "C", "C++", "Tailwind", "Shadcn"],
  },

  coreExpertise: [
    "Full-Stack Engineering",
    "Backend Architecture",
    "Data Structures & Algorithms",
    "Real-Time Systems",
    "System Design Fundamentals",
    "API Design & Integration",
    "Performance & Scalability",
  ],

  architecture: [
    "Real-time systems using WebSockets",
    "Dockerized backend services",
    "REST + WebSocket hybrid APIs",
    "Database-driven scalable architectures",
  ],

  // ─── GitHub ────────────────────────────────────────────────
  gitMonths: 4,
  githubUsername: "rahulCoder9417",
  githubProfile: "https://github.com/rahulCoder9417",

  // ─── LeetCode ──────────────────────────────────────────────
  leetCodeStats: {
    solved: 126,
    easy: 24,
    medium: 99,
    hard: 3,
  },
  leetCodeProfile: "https://leetcode.com/user7867575/",

  // ─── Projects ──────────────────────────────────────────────
  FeaturedProject: {
    title: "DevSync",
    category: "Real-Time Collaborative Developer Platform",
    description:
      "DevSync is a real-time collaborative developer platform that enables teams to write code, execute commands, and collaborate live within a shared environment. It features synchronized editors, an integrated terminal for live execution, and WebSocket-driven state sharing to maintain real-time consistency across users. The platform is backed by a scalable Node.js architecture, supports isolated execution using containerized environments, and ensures persistent project state to enable reliable, multi-user collaboration across sessions.",
    imageUrl: "/DevSync-Main.png",
    isFeatured: true,
    githubRepo: "DevSync",
    highlights: [
      "Real-time collaboration using WebSockets",
      "Integrated terminal with live command execution",
      "Headless terminal & GUI processes using Xvfb (X11)",
      "Concurrent file editing with conflict handling",
      "Scalable backend APIs with Node.js",
      "Dockerized environments for isolated execution & deployment",
    ],
    tags: [
      "Next.js", "Express.js", "Cloudinary", "Vercel",
      "Render", "WebSockets", "Prisma", "Docker", "Xvfb", "Yjs",
    ],
  },

  SecondaryProject: {
    title: "Bookwise",
    category: "Library Management & Access Control System",
    description:
      "BookWise is a full-stack library management system designed with real-world access control and automation.\nUsers can discover, borrow, and return books through a secure, approval-based flow.\nAdmins manage users and inventory with protected routes and fine-grained permissions.\nBackground workflows automate emails, reminders, and overdue handling reliably.",
    isFeatured: false,
    imageUrl: "/Library-Main.png",
    githubRepo: "Bookwise",
    highlights: [
      "User authentication and session management using NextAuth",
      "Admin-only routes with role-based access control",
      "Book borrowing and request approval workflow",
      "Redis-backed rate limiting to prevent abuse",
      "Email notifications for request status updates",
      "Background job processing using QStash",
    ],
    tags: [
      "Next.js", "Drizzle ORM", "NextAuth", "Redis",
      "Rate Limiting", "QStash", "NodeMailer",
    ],
  },

  ThirdProject: {
    title: "NewTube",
    category: "Social Media & Content Sharing Platform",
    isFeatured: false,
    description:
      "NewTube is a full-stack social media platform that blends short-form content, micro-posts, and video sharing into a unified experience. Users can create posts, upload video shorts, interact through likes, dislikes, and comments, and edit their content in real time. The platform is built with a scalable REST-based backend and a responsive frontend, enabling smooth content discovery and user engagement.",
    imageUrl: "/NewTube-main.png",
    githubRepo: "NewTube",
    highlights: [
      "User-generated posts and video shorts",
      "Like, dislike, comment, and edit interactions",
      "Content feed with real-time updates",
      "Scalable REST APIs using Node.js and Express",
      "MongoDB data modeling for social interactions",
    ],
    tags: [
      "React", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs",
    ],
  },

  // ─── Experience ────────────────────────────────────────────
  experience: [
    {
      role: "Fullstack Developer Intern",
      company: "Inboxkit",
      location: "Remote — Gurgaon, India",
      period: "Jan 2026 – Present",
      description:
        "Building Fullstack Applications,which are scalable and maintainable",
      highlights: [
        "Improved Performance by optimizing database queries and reducing API response times.",
        "Made Company sub products from scratch alone.",
        "Working on multiple frameworks and languages simultaneously.",
      ],
      tags: ["Next.js", "MERN", "Go", "Fastify"],
      current: true,
    },
  ],

  // ─── Contact ───────────────────────────────────────────────
  primaryContact: [
    {
      icon: Linkedin,
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/rahul-kumar-511054360/",
      primary: true,
    },
    {
      icon: Mail,
      label: "Email Me",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rahulkum94l94@gmail.com&su=Work%20Opportunity&body=Hi%20Rahul",
      primary: true,
    },
  ],

  secondaryContact: [
    { icon: Github, label: "GitHub", href: "https://github.com/rahulCoder9417" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/RahulKumar9417" },
    { label: "Fiverr", href: "https://www.fiverr.com/s/EgLENK7" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~0131fa79af2d84bdfa" },
  ],

  // ─── Socials (header/footer) ───────────────────────────────
  socials: [
    { icon: Github, label: "GitHub", href: "https://github.com/rahulCoder9417" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rahul-kumar-511054360/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/RahulKumar9417" },
  ],

  // ─── Footer ────────────────────────────────────────────────
  footer: {
    tagline: "Built with Next.js, Tailwind CSS, and a lot of coffee.",
  },
};
