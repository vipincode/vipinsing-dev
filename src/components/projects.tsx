"use client";

import { ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern, fully responsive e-commerce platform built with Next.js and Stripe integration, featuring real-time inventory management.",
      tags: ["Next.js", "React", "Tailwind", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and advanced filtering options.",
      tags: ["React", "Redux", "Firebase", "Figma Design"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 3,
      title: "Design System",
      description:
        "Comprehensive component library and design system built with Storybook, supporting multiple themes and accessibility standards.",
      tags: ["shadcn/ui", "Storybook", "TypeScript"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Minimal and elegant portfolio showcasing creative work with smooth animations, optimized performance, and SEO best practices.",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting features for insights.",
      tags: ["React", "Chart.js", "API Integration"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 6,
      title: "Mobile App UI",
      description:
        "Beautiful mobile application interface design and development with responsive layouts and intuitive user interactions.",
      tags: ["React Native", "Figma", "Mobile Design"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of my recent work showcasing my expertise in frontend
            development and design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-secondary/30 border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative p-6 sm:p-8 h-full flex flex-col">
                <div className="flex-1 space-y-4 mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-accent/15 text-accent text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                    aria-label="GitHub repository"
                  >
                    <LuGithub size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                    aria-label="Live project"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more? Check out my complete project portfolio.
          </p>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            <LuGithub size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
