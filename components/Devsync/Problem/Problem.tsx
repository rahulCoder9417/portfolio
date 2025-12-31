import React from 'react'

const Problem = () => {
  return (
    <div className="container max-w-6xl mx-auto px-6">
    <div className="space-y-14">

      {/* Section Title */}
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          The Problem DevSync Solves
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Modern collaboration tools are fragmented, limited, or fake-real-time.
          DevSync was built to remove these constraints.
        </p>
      </div>

      {/* Problem Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "No True Real-Time",
            desc: "Most editors fake collaboration or rely on refresh-based sync."
          },
          {
            title: "Can’t Run Real Projects",
            desc: "Online editors break when npm, servers,GUI sessions, or build tools are involved."
          },
          {
            title: "MultiLanguage ",
            desc: "Online IDE can't run multiple languages."
          },
          {
            title: "Disconnected Tools",
            desc: "Chat, code, terminal, and preview live in separate apps."
          }
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border bg-card p-6 hover:bg-muted/40 transition"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
  )
}

export default Problem
