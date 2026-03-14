import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import {
  GlassDock,
  GlassButton,
  GlassCard,
  GlassEffect,
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
      {/* Liquid Glass Banner */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          minHeight: "320px",
          background: `url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop") center center / cover no-repeat`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

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
            <GlassButton href="mailto:izhaanzia@gmail.com" className="rounded-3xl px-10 py-5 hover:scale-[1.03] cursor-pointer overflow-hidden">
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
        className="bg-gradient-to-br from-primary/8 via-background to-accent/8 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="shadow-2xl">
              <div className="p-8 md:p-12">
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
                  <GlassEffect
                    href="mailto:izhaanzia@gmail.com"
                    className="rounded-2xl hover:scale-[1.02] transition-transform duration-300 group cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">Email Me</h4>
                      <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                        izhaanzia@gmail.com
                      </p>
                    </div>
                  </GlassEffect>

                  <GlassEffect className="rounded-2xl cursor-default">
                    <div className="flex flex-col items-center justify-center p-6">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground text-sm">Nagpur, India</p>
                    </div>
                  </GlassEffect>
                </div>

                <div className="text-center">
                  <GlassButton
                    href="mailto:izhaanzia@gmail.com"
                    className="rounded-full px-8 py-4 hover:scale-[1.04] cursor-pointer overflow-hidden inline-block"
                  >
                    <div className="flex items-center gap-2 text-foreground font-semibold text-base">
                      <Send className="w-5 h-5" />
                      Say Hello
                    </div>
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
