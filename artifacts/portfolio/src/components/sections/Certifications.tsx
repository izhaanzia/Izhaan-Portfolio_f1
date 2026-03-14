import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CERTIFICATIONS = [
  {
    title: "Goldman Sachs Job Simulation",
    issuer: "Forage",
    date: "2024",
    icon: Award,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  {
    title: "Advanced HTML Certification",
    issuer: "UpGrad",
    date: "2023",
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "C/C++ Programming Certification",
    issuer: "Udemy",
    date: "2023",
    icon: CheckCircle2,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  }
];

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Continuous Learning">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-b from-card to-secondary/20">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full ${cert.bg} flex items-center justify-center mb-6`}>
                  <cert.icon className={`w-8 h-8 ${cert.color}`} />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h4>
                <div className="mt-auto pt-4 flex flex-col items-center">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">{cert.issuer}</span>
                  <span className="text-sm text-muted-foreground mt-1">{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
