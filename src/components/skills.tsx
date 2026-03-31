export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Languages",
      skills: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Frontend Frameworks",
      skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    },
    {
      category: "State Management",
      skills: ["Redux Toolkit", "React Hooks", "Context API", "SWR"],
    },
    {
      category: "Design Tools",
      skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Framer"],
    },
    {
      category: "Development Tools",
      skills: ["Git", "GitHub", "Storybook", "Vercel"],
    },
    {
      category: "CMS & Platforms",
      skills: ["PayloadCMS", "WordPress", "Webflow", "Elementor"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 5 years of hands-on experience
            with modern web technologies and design tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group relative bg-secondary/30 border border-border rounded-xl p-6 hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-lg group-hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border border-border rounded-xl p-8 text-center backdrop-blur-sm">
          <p className="text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            I&apos;m constantly exploring new tools and frameworks to stay at
            the forefront of web development. I thrive in collaborative
            environments and enjoy tackling complex challenges with creative,
            efficient solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
