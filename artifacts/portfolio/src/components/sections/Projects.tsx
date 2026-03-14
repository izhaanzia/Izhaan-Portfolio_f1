import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="My Work" className="bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="h-48 md:h-full w-full flex items-center justify-center p-8 relative z-10">
                  <div className="w-full h-full bg-background/80 backdrop-blur-sm rounded-xl border border-border shadow-2xl flex items-center justify-center p-6 transform group-hover:scale-105 transition-transform duration-500">
                    <span className="font-display font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">IZ.</span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                    Web App
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                    Frontend
                  </span>
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                    Personal Portfolio Website
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground mt-2">
                    A highly responsive, performant personal portfolio website built to showcase skills, projects, and professional growth. Features smooth scrolling, modern glassmorphism UI, and strict semantic HTML structure.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 mb-8">
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vite"].map((tech) => (
                      <span key={tech} className="text-sm font-medium text-foreground bg-secondary px-3 py-1 rounded-md border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 flex items-center gap-4">
                  <Button asChild className="rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="rounded-full hover:bg-secondary hover:-translate-y-0.5 transition-all">
                    <a href="https://github.com/izhaanzia" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
