import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Code, Layout, Lightbulb, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const INTERESTS = [
  { icon: Layout, title: "Responsive Design", desc: "Building layouts that adapt perfectly to any screen size." },
  { icon: Terminal, title: "Clean Code", desc: "Writing maintainable, scalable, and self-documenting code." },
  { icon: Lightbulb, title: "Problem Solving", desc: "Finding efficient solutions to complex technical challenges." },
  { icon: Code, title: "Modern Web Tools", desc: "Continuously exploring the latest frontend frameworks." },
];

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
            <img 
              src={`${import.meta.env.BASE_URL}images/abstract-code.png`} 
              alt="Abstract Code Visualization" 
              className="w-full h-[400px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-foreground">
            Passionate about bringing ideas to life on the web.
          </h3>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a B.Tech Computer Science student deeply passionate about web development and emerging technologies. I enjoy building responsive websites, experimenting with modern tools, and continuously honing my programming skills.
            </p>
            <p>
              My work focuses on striking the perfect balance between usability, clean architectural code, and practical, scalable web solutions that provide real value to users.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {INTERESTS.map((interest, idx) => (
              <Card key={idx} className="bg-card/50 border-border/50 hover-elevate transition-all duration-300">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                    <interest.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{interest.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{interest.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
