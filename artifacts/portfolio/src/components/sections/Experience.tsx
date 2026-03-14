import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";
import { GlassCard } from "@/components/ui/liquid-glass";

export function Experience() {
  return (
    <Section
      id="experience"
      className="bg-gradient-to-br from-violet-500/6 via-background to-primary/6"
    >
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
          </div>

          <div className="relative pl-8 border-l-2 border-border/50 space-y-10">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary" />
              <GlassCard className="hover:-translate-y-1 transition-transform duration-300 cursor-default">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-foreground">B.Tech in Computer Science Engineering</h4>
                  <p className="text-primary font-medium mt-1">Anjuman College of Engineering and Technology</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                    <MapPin className="w-4 h-4" />
                    <span>Nagpur, India</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Focused on core computer science principles, data structures, algorithms, and modern software engineering practices.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>

        {/* Experience Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-accent/10 text-accent rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Experience</h3>
          </div>

          <div className="relative pl-8 border-l-2 border-border/50 space-y-10">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-accent" />
              <GlassCard className="hover:-translate-y-1 transition-transform duration-300 cursor-default border-l-4 border-l-accent/50">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-foreground">Web Development Intern</h4>
                    <div className="flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>Apr 2025 – May 2025</span>
                    </div>
                  </div>
                  <p className="text-foreground font-medium mb-4">ByteUprise</p>
                  <ul className="space-y-2 mt-4">
                    {[
                      "Developed and styled responsive user interfaces across multiple device sizes.",
                      "Improved existing UI components for better reusability and accessibility.",
                      "Optimized front-end performance utilizing modern web technologies and best practices.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
