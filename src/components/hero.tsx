"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                👋 Welcome to my portfolio
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                <span className="text-foreground">Vipin</span>{" "}
                <span className="bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent">
                  Singh
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light">
                Frontend Developer & Web Designer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Crafting beautiful, functional web experiences with 5 years of
                expertise in modern technologies. Specializing in React,
                Next.js, and thoughtful UI design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all hover:gap-3"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="mailto:svipin174@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
              >
                Get in touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-8">
              <a
                href="https://github.com"
                className="p-3 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors group"
                aria-label="GitHub"
              >
                <LuGithub
                  size={24}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors group"
                aria-label="LinkedIn"
              >
                <LuLinkedin
                  size={24}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </a>
              <a
                href="mailto:svipin174@gmail.com"
                className="p-3 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors group"
                aria-label="Email"
              >
                <Mail
                  size={24}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Visual Element */}
        <div
          className={`hidden lg:block transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-secondary/30 to-secondary/10 border border-border rounded-3xl p-8 h-96 flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="h-4 w-32 bg-accent/30 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-secondary/30 rounded-full"></div>
                  <div className="h-3 w-5/6 bg-secondary/30 rounded-full"></div>
                  <div className="h-3 w-4/5 bg-secondary/30 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind", "TypeScript"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
