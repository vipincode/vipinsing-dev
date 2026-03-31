export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
                About My Journey
              </h2>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                With 5 years of professional experience, I&apos;ve dedicated
                myself to mastering the art of creating beautiful, functional
                web experiences. My passion lies in the intersection of design
                and development, where aesthetics meet functionality.
              </p>

              <p>
                I believe great digital products emerge from collaboration and
                attention to detail. Whether it&apos;s optimizing performance,
                crafting pixel-perfect UIs, or architecting scalable components,
                I bring both technical expertise and creative thinking to every
                project.
              </p>

              <p>
                Beyond code, I&apos;m constantly exploring emerging
                technologies, contributing to open-source communities, and
                sharing knowledge with fellow developers. I&apos;m driven by
                curiosity and a commitment to continuous growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-accent">5+</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Years of Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-secondary/30 border border-border rounded-2xl p-8 space-y-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Design Philosophy
                  </h3>
                  <p className="text-muted-foreground italic">
                    "Code is not just about making things work. It's about
                    creating experiences that delight users and stand the test
                    of time."
                  </p>
                </div>
                <div className="h-px bg-border"></div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Location
                    </p>
                    <p className="text-foreground font-medium">India</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Availability
                    </p>
                    <p className="text-foreground font-medium">
                      Open for Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/30 border border-border rounded-xl p-4 backdrop-blur-sm text-center">
                <p className="text-2xl font-bold text-accent">100%</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Client Satisfaction
                </p>
              </div>
              <div className="bg-secondary/30 border border-border rounded-xl p-4 backdrop-blur-sm text-center">
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Dedicated Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
