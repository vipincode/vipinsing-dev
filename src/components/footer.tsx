"use client";

import { ExternalLink, Mail } from "lucide-react";
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  const socialLinks = [
    {
      icon: LuGithub,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: LuLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: LuTwitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:svipin174@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-border bg-secondary/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              VS
            </div>
            <p className="text-sm text-muted-foreground">
              Crafting beautiful web experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "UI/UX Design",
                "Consulting",
                "Mentoring",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:svipin174@gmail.com"
                className="text-sm text-muted-foreground hover:text-accent transition-colors block"
              >
                svipin174@gmail.com
              </a>
              <a
                href="tel:+917309088590"
                className="text-sm text-muted-foreground hover:text-accent transition-colors block"
              >
                +91-7309088590
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Vipin Singh. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 bg-secondary/50 hover:bg-accent/20 text-muted-foreground hover:text-accent rounded-lg transition-all duration-300 group"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Tech Stack Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Built with <span className="text-accent">Next.js</span> •{" "}
            <span className="text-accent">React</span> •{" "}
            <span className="text-accent">Tailwind CSS</span> • Hosted on{" "}
            <span className="text-accent">Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
