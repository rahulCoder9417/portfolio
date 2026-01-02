import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowLeft, Play } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FeatureBadge } from '../FeatureBadge'

const Hero = ({title,description,features,actions}: {title: string, description: string, features: string[], actions: {label: string, href: string,}[]}) => {
  return (
    <div className="container max-w-5xl mx-auto px-6">
          <div className="project-animate-fade-in space-y-10">

            {/* Title & Description */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="project-gradient-text">{title}</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                {description}
              </p>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {features.map((feature) => (
                <FeatureBadge key={feature}>{feature}</FeatureBadge>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2">
              <Button
                variant="glow"
                size="default"
                className="project-font-mono font-bold"
                onClick={() =>
                  document
                    .getElementById(actions[0].href)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <ArrowDown className="w-4 h-4" />
                See It in Action
              </Button>
              <Link href={actions[1].href} target="_blank">
                <Button
                  variant="link"
                  size="default"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Play className="w-4 h-4" />
                  Try It Out
                </Button>
              </Link>
            

              <Link href="/">
                <Button
                  variant="link"
                  size="default"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </Button>
              </Link>
            </div>
          </div>
        </div>

  )
}

export default Hero
