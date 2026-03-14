import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Terminal, Globe, Wrench } from "lucide-react";
import { GlassCard, GlassEffect } from "@/components/ui/liquid-glass";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: ["C", "C++", "Python", "Java", "JavaScript"],
    color: "from-blue-500/20 to-indigo-500/20",
    textColor: "text-blue-500",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "React", "Tailwind CSS"],
    color: "from-emerald-500/20 to-teal-500/20",
    textColor: "text-emerald-500",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vite", "NPM/PNPM"],
    color: "from-orange-500/20 to-red-500/20",
    textColor: "text-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="My Toolkit"
      className="bg-gradient-to-tr from-emerald-500/6 via-background to-blue-500/6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
      >
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <GlassCard className="h-full hover:-translate-y-1 transition-transform duration-300 cursor-default">
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className={`w-6 h-6 ${category.textColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <GlassEffect
                      key={sIdx}
                      className="rounded-full px-3 py-1.5 cursor-default hover:px-5 transition-all duration-300"
                    >
                      <span className="text-sm font-medium text-foreground">{skill}</span>
                    </GlassEffect>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
