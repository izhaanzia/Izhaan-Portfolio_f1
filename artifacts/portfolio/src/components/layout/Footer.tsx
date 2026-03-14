import { Code2, Github, Heart, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent p-[2px]">
                <div className="w-full h-full bg-card rounded-[6px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-foreground" />
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                Izhaan<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-muted-foreground text-center md:text-left max-w-xs">
              Computer Science Student & Web Developer focused on building clean, practical, and responsive digital experiences.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/izhaanzia" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:izhaanzia@gmail.com" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Izhaan Zia. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with React <Heart className="w-4 h-4 text-destructive inline fill-destructive/20" /> & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
