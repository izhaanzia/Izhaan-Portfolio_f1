import { Section } from "@/components/ui/section";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import {
  Code2,
  Globe,
  Briefcase,
  Award,
  GraduationCap,
  Layers,
  Rocket,
} from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Core Programming",
    date: "2021",
    content:
      "Began with C and C++, building strong foundations in logic, memory management, data structures, and algorithms.",
    category: "Education",
    icon: Code2,
    relatedIds: [2, 7],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Python & Java",
    date: "2022",
    content:
      "Expanded into Python and Java, exploring object-oriented design and scripting for a broader language toolkit.",
    category: "Education",
    icon: Layers,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Web Dev Begins",
    date: "2022",
    content:
      "Discovered HTML, CSS, and JavaScript — started crafting responsive web pages and understanding how the browser works.",
    category: "Web",
    icon: Globe,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Certifications",
    date: "2023",
    content:
      "Earned Advanced HTML certification from UpGrad and C/C++ certification from Udemy, validating skills with industry credentials.",
    category: "Achievement",
    icon: Award,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Goldman Sachs Sim",
    date: "2024",
    content:
      "Completed the Goldman Sachs Job Simulation via Forage — gained exposure to professional engineering challenges and workflows.",
    category: "Achievement",
    icon: Briefcase,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 6,
    title: "ByteUprise Intern",
    date: "Apr–May 2025",
    content:
      "Joined ByteUprise as a Web Development Intern — built responsive UIs, improved components, and optimised front-end performance.",
    category: "Experience",
    icon: Rocket,
    relatedIds: [5, 7],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 7,
    title: "B.Tech CS",
    date: "Ongoing",
    content:
      "Pursuing B.Tech in Computer Science at Anjuman College of Engineering, Nagpur — deepening theoretical and practical expertise.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [1, 6],
    status: "in-progress" as const,
    energy: 65,
  },
];

export function Journey() {
  return (
    <Section
      id="journey"
      title="My Developer Journey"
      subtitle="Timeline"
      className="bg-gradient-to-br from-primary/6 via-background to-violet-500/6"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-muted-foreground mb-8 text-base max-w-xl mx-auto">
          Click any orbiting node to explore a milestone. Click an empty area to resume rotation.
        </p>
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </Section>
  );
}
