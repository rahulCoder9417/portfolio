import { config } from "@/utlis/config";
import {
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";

const primaryContacts = config.primaryContact

const secondaryContacts = config.secondaryContact

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 h-screen">
      <div className="max-w-4xl mx-auto text-center space-y-12">

        {/* Header */}
        <div className="space-y-4">
          <span className="text-sm uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold">
            Let’s work together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I’m open to internships, full-time roles, and meaningful freelance work.
            If you’re hiring or building something interesting, let’s talk.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryContacts.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              className="
                inline-flex items-center gap-3
                rounded-xl bg-primary px-8 py-4
                text-primary-foreground font-medium
                shadow-glow
                transition-all duration-300
                hover:scale-105
              "
            >
              <Icon className="h-5 w-5" />
              {label}
            </a>
          ))}
          <Button
          variant="link"
          size="default"
          className="  inline-flex items-center gap-3
                rounded-xl bg-primary px-8 py-6
                text-primary-foreground font-medium
                shadow-glow
                transition-all duration-300
                hover:scale-105"
          >
          <Phone className="w-4 h-4" />
         9417920371
        </Button>
        </div>

        {/* Secondary Links */}
        <div className="pt-10 space-y-4">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">
            Other platforms
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {secondaryContacts.map(({ icon: Icon, label, href }) =>
              Icon ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-lg border border-border
                    text-muted-foreground
                    transition hover:border-primary hover:text-primary
                  "
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className="
                    px-4 py-2 rounded-lg border border-border
                    text-sm text-muted-foreground
                    hover:border-primary hover:text-primary transition
                  "
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
