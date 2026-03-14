import { Section } from "@/components/ui/section";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  Code2,
  Globe,
  Lightbulb,
  Github,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    Icon: Globe,
    name: "Web Development",
    description:
      "Building fast, responsive, and accessible web applications using React, Tailwind CSS, and modern tooling.",
    href: "#projects",
    cta: "See Projects",
    background: (
      <img
        src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60"
        alt="Web Development"
        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Code2,
    name: "Clean Architecture",
    description:
      "Writing maintainable, scalable code with a focus on structure, readability, and long-term quality.",
    href: "#skills",
    cta: "View Skills",
    background: (
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60"
        alt="Clean Code"
        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Lightbulb,
    name: "Problem Solving",
    description:
      "Breaking down complex problems with structured, algorithmic thinking.",
    href: "#experience",
    cta: "Learn more",
    background: (
      <img
        src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=800&auto=format&fit=crop&q=60"
        alt="Problem Solving"
        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Github,
    name: "Open Source",
    description:
      "Contributing to the community and sharing work publicly on GitHub.",
    href: "https://github.com/izhaanzia",
    cta: "View GitHub",
    background: (
      <img
        src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60"
        alt="Open Source"
        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GraduationCap,
    name: "Continuous Learning",
    description:
      "Constantly exploring new technologies, frameworks, and best practices to stay ahead of the curve.",
    href: "#certifications",
    cta: "View Certifications",
    background: (
      <img
        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60"
        alt="Learning"
        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function Highlights() {
  return (
    <Section
      id="highlights"
      title="What I Bring"
      subtitle="Highlights"
      className="bg-gradient-to-br from-accent/6 via-background to-primary/6"
    >
      <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </Section>
  );
}
