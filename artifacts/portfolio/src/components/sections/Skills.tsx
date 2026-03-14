import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Globe, Wrench } from "lucide-react";

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
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies" subtitle="My Toolkit" className="bg-secondary/30">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
      >
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Card className="h-full border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className={`w-6 h-6 ${category.textColor}`} />
                </div>
                <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
