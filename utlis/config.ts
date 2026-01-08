import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const config ={
  
  "leetCodeStats": {
    "solved": 98,
    "easy": 19,
    "medium": 79,
    "hard": 0,
},
    "about": {
        "age": 19,
        "status": "BCA Student",
        "open_to_work": true
    },
    "techStack": {
        "primary": ["Next.js", "Node.js","Yjs", "WebSockets","React.js","JavaScript","TypeScript","Prisma","RTK","Postgres SQL","Redis","Express","Drizzle","Docker","Git","Mongo DB","Zod","Render","Vercel"],
        "secondary": ["Python","C","C++","Tailwind","Shadcn","HTML","Cloudinary"],
    },
    "coreExpertise": [
        "Full-Stack Engineering",
        "Backend Architecture",
        "Data Structures & Algorithms",
        "Real-Time Systems",
        "System Design Fundamentals",
        "API Design & Integration",
        "Performance & Scalability",
    ],
    "architecture": [
        "Real-time systems using WebSockets",
        "Dockerized backend services",
        "REST + WebSocket hybrid APIs",
        "Database-driven scalable architectures",
    ],
    "socials": [
        { icon: Github, label: "GitHub", href: "https://github.com/your-username" },
        { icon: Linkedin, label: "LinkedIn", href: "#" },
        { icon: Twitter, label: "Twitter", href: "#" },
    ],
    "primaryContact": [
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
    "secondaryContact": [
        { icon: Github, label: "GitHub", href: "https://github.com/rahulCoder9417" },
        { icon: Twitter, label: "Twitter", href: "https://x.com/RahulKumar9417" },
        { label: "Fiverr", href: "https://www.fiverr.com/s/EgLENK7" },
        { label: "Upwork", href: "https://www.upwork.com/freelancers/~0131fa79af2d84bdfa" },
      ],
    "FeaturedProject": {
        title: "DevSync",
        category: "Real-Time Collaborative Developer Platform",
      
        description:
        "DevSync is a real-time collaborative developer platform that enables teams to write code, execute commands, and collaborate live within a shared environment. It features synchronized editors, an integrated terminal for live execution, and WebSocket-driven state sharing to maintain real-time consistency across users. The platform is backed by a scalable Node.js architecture, supports isolated execution using containerized environments, and ensures persistent project state to enable reliable, multi-user collaboration across sessions.",
      
        imageUrl: "/DevSync-Main.png",
        isFeatured: true,
        highlights: [
          "Real-time collaboration using WebSockets",
          "Integrated terminal with live command execution",
          "Headless terminal & GUI processes using Xvfb (X11)",
          "Concurrent file editing with conflict handling",
          "Scalable backend APIs with Node.js",
          "Dockerized environments for isolated execution & deployment",
        ],
      
        tags: [
          "Next.js",
          "Express.js",
          "Cloudinary",
          "Vercel",
          "Render",
          "WebSockets",
          "Prisma",
          "Docker",
          "Xvfb",
          "Yjs"
        ],
      },
    "SecondaryProject":{
        title: "Bookwise",
        category: "Library Management & Access Control System",
      
        description:
          `BookWise is a full-stack library management system designed with real-world access control and automation.
Users can discover, borrow, and return books through a secure, approval-based flow.
Admins manage users and inventory with protected routes and fine-grained permissions.
Background workflows automate emails, reminders, and overdue handling reliably.`,
        isFeatured: false,
        imageUrl: "/Library-Main.png", // optional if you add later
      
        highlights: [
          "User authentication and session management using NextAuth",
          "Admin-only routes with role-based access control",
          "Book borrowing and request approval workflow",
          "Redis-backed rate limiting to prevent abuse",
          "Email notifications for request status updates",
          "Background job processing using QStash",
        ],
      
        tags: [
          "Next.js",
          "Drizzle ORM",
          "NextAuth",
          "Redis",
          "Rate Limiting",
          "QStash",
          "NodeMailer",
        ],
      },
    "ThirdProject":{
        title: "NewTube",
        category: "Social Media & Content Sharing Platform",
      isFeatured: false,
        description:
          "NewTube is a full-stack social media platform that blends short-form content, micro-posts, and video sharing into a unified experience. Users can create posts, upload video shorts, interact through likes, dislikes, and comments, and edit their content in real time. The platform is built with a scalable REST-based backend and a responsive frontend, enabling smooth content discovery and user engagement.",
      
          imageUrl: "/NewTube-main.png", // optional if you add later
      
        highlights: [
          "User-generated posts and video shorts",
          "Like, dislike, comment, and edit interactions",
          "Content feed with real-time updates",
          "Scalable REST APIs using Node.js and Express",
          "MongoDB data modeling for social interactions",
        ],
      
        tags: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "REST APIs",
        ],
      }            
}