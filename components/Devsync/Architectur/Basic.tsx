import React from 'react'
interface props{
  description :string,
  data : {
    mainH:string,
    secH :string,
    desc :string,
    components :string[]
  }[]
}
const Basic = ({
  description,
  data
}:props) => {
  return (
    <div className="container max-w-6xl mx-auto px-6">
          <div className="space-y-16">

            {/* Section Header */}
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                System Architecture
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
              {description}
              </p>
            </div>

            {/* Architecture Stack */}
            <div className="space-y-5 max-w-3xl">

                {data.map(i=>(
                   <div key={i.mainH} className="relative rounded-xl border border-border bg-card p-6">
                   <span className="absolute -top-3 left-4 bg-background px-3 text-xs font-mono text-primary">
                     {i.mainH}
                   </span>
                   <h3 className="font-semibold text-lg">
                    {i.secH}
                   </h3>
                   <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                     {i.desc}
                   </p>
                   <div className="flex flex-wrap gap-2 mt-4 text-xs text-muted-foreground">
                    {i.components.map((j)=>   <span key={j} className="px-2 py-1 rounded bg-muted">{j}</span>)}
                     
                   </div>
                 </div>
                ))}
           
            </div>
          </div>
        </div>
  )
}

export default Basic
