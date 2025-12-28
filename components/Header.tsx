"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="mx-auto max-w-6xl flex items-center justify-between rounded-full border border-border/50 bg-background/80 px-6 py-3 backdrop-blur-md">
        {/* Logo */}
        <a href="#" className="font-heading text-xl font-bold text-foreground">
          AR<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {label}
            </a>
          ))}
          <a 
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-6 right-6 mt-2 rounded-2xl border border-border bg-background/95 p-6 backdrop-blur-md">
          <div className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
