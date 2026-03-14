import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";
import {
  GlassFilter,
  GlassDock,
  GlassButton,
} from "@/components/ui/liquid-glass";

const socialIcons = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    alt: "GitHub",
    onClick: () => window.open("https://github.com/izhaanzia", "_blank"),
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    alt: "LinkedIn",
    onClick: () => window.open("https://linkedin.com", "_blank"),
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    alt: "VS Code",
  },
];

export function Contact() {
  return (
    <>
      {/* Liquid Glass Social / Tech Dock */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          minHeight: "320px",
          background: `url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop") center center / cover no-repeat`,
        }}
      >
        {/* Dark overlay so glass has contrast */}
        <div className="absolute inset-0 bg-black/50" />

        <GlassFilter />

        <div className="relative z-10 flex flex-col items-center justify-center gap-6 py-16 px-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white/80 text-sm font-medium uppercase tracking-widest"
          >
            Find me &amp; my stack
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassDock icons={socialIcons} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassButton href="mailto:izhaanzia@gmail.com">
              <div className="text-lg text-white font-medium px-2">
                izhaanzia@gmail.com
              </div>
            </GlassButton>
          </motion.div>
        </div>
      </div>

      {/* Contact Card */}
      <Section
        id="contact"
        title="Get In Touch"
        subtitle="Contact Me"
        className="bg-secondary/30 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-border/50 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Let's build something amazing together.
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    I'm currently looking for new opportunities and
                    collaborations. Whether you have a question or just want to
                    say hi, I'll try my best to get back to you!
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
                  <a href="mailto:izhaanzia@gmail.com" className="group">
                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Email Me
                      </h4>
                      <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                        izhaanzia@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="group">
                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Location
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Nagpur, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:izhaanzia@gmail.com">
                      <Send className="w-5 h-5 mr-2" />
                      Say Hello
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
