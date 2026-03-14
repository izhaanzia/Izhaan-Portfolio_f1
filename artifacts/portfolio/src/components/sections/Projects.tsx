import { Section } from "@/components/ui/section";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects" title="" subtitle="" className="bg-secondary/30 !py-0 overflow-hidden">
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
          <Card className="w-full max-w-2xl overflow-hidden border-border/50 shadow-xl">
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
                  <div className="w-full h-full bg-background/80 backdrop-blur-sm rounded-xl border border-border shadow-2xl flex items-center justify-center p-6">
                    <span className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      IZ.
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 p-5 md:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                    Web App
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                    Frontend
                  </span>
                </div>
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-xl md:text-2xl font-bold">
                    Personal Portfolio Website
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1">
                    A responsive portfolio website built to showcase skills, projects, and professional growth. Features smooth scrolling, modern UI, and semantic HTML structure.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-foreground bg-secondary px-2 py-1 rounded-md border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 flex items-center gap-3">
                  <Button asChild size="sm" className="rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      View Live
                    </a>
                  </Button>
                  <Button variant="outline" asChild size="sm" className="rounded-full hover:bg-secondary hover:-translate-y-0.5 transition-all">
                    <a href="https://github.com/izhaanzia" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      Source Code
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </ContainerScroll>
    </Section>
  );
}
