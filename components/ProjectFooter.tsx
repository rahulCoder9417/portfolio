import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, Github, Mail } from 'lucide-react'

const ProjectFooter = ({githubLink, }: {githubLink: string, }) => {
  return (
   <div>
    {/* Call to Action */}
    <section className="py-20 md:py-28">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Ready to explore?
              </h2>
              <p className="text-muted-foreground">
                Dive into the source code or get in touch to discuss the implementation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href={"https://github.com/rahulCoder9417/"+githubLink} target="_blank" className="flex items-center gap-2">
              <Button variant="glow" size="lg">
                <Github className="w-4 h-4" />
                Explore the Code
                <ArrowRight className="w-4 h-4" />
              </Button>
              </Link>
              <Link href="/#contact"  className="">
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="project-font-mono">DevSync — Built for developers, by me.</p>
            <p>© 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>
   </div>
  )
}

export default ProjectFooter
