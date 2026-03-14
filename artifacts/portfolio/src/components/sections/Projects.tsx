import { Section } from "@/components/ui/section";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GlassCard, GlassButton, GlassEffect } from "@/components/ui/liquid-glass";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects" title="" subtitle="" className="!py-0 overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/8">
      <ContainerScroll
        titleComponent={
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              My Work
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Projects
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Things I've built while learning and growing as a developer.
            </p>
          </div>
        }
      >
        <div className="h-full w-full flex items-center justify-center p-4 md:p-6">
          <GlassCard className="w-full max-w-2xl overflow-hidden">
            <div className="md:flex h-full">
              <div className="md:w-2/5 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="h-40 md:h-full w-full flex items-center justify-center p-8 relative z-10">
                  <div className="w-full h-full backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl flex items-center justify-center p-6">
                    <span className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      IZ.
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 p-5 md:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <GlassEffect className="rounded-full px-3 py-1 cursor-default">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">Web App</span>
                  </GlassEffect>
                  <GlassEffect className="rounded-full px-3 py-1 cursor-default">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider">Frontend</span>
                  </GlassEffect>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Personal Portfolio Website
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A responsive portfolio website built to showcase skills, projects, and professional growth. Features smooth scrolling, modern UI, and semantic HTML structure.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"].map((tech) => (
                    <GlassEffect
                      key={tech}
                      className="rounded-md px-2 py-1 cursor-default"
                    >
                      <span className="text-xs font-medium text-foreground">{tech}</span>
                    </GlassEffect>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <GlassButton
                    href="#"
                    className="rounded-full px-4 py-2 hover:scale-[1.04] cursor-pointer overflow-hidden"
                  >
                    <div className="flex items-center gap-1.5 text-foreground text-sm font-semibold">
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Live
                    </div>
                  </GlassButton>
                  <GlassButton
                    href="https://github.com/izhaanzia"
                    className="rounded-full px-4 py-2 hover:scale-[1.04] cursor-pointer overflow-hidden"
                  >
                    <div className="flex items-center gap-1.5 text-foreground text-sm font-semibold">
                      <Github className="w-3.5 h-3.5" />
                      Source Code
                    </div>
                  </GlassButton>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </ContainerScroll>
    </Section>
  );
}
