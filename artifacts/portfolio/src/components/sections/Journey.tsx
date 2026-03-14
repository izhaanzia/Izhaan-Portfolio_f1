import { Section } from "@/components/ui/section";
import { FeatureSteps } from "@/components/ui/feature-section";

const journeySteps = [
  {
    step: "Chapter 1",
    title: "Learning the Foundations",
    content:
      "Began with core programming languages — C, C++, Python, and Java — building a strong grasp of logic, data structures, and algorithms.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
  },
  {
    step: "Chapter 2",
    title: "Discovering the Web",
    content:
      "Dived into HTML, CSS, and JavaScript, learning to craft responsive layouts and bring designs to life across devices of all sizes.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
  },
  {
    step: "Chapter 3",
    title: "Real-World Experience",
    content:
      "Joined ByteUprise as a Web Development Intern — developing responsive interfaces, improving UI components, and optimizing front-end performance.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Chapter 4",
    title: "Building & Growing",
    content:
      "Earning certifications, building personal projects, and continuously leveling up with modern tools like Git, VS Code, and React.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Journey() {
  return (
    <Section id="journey" className="overflow-hidden">
      <FeatureSteps
        features={journeySteps}
        title="My Developer Journey"
        autoPlayInterval={4000}
        imageHeight="h-[400px]"
        className="p-0"
      />
    </Section>
  );
}
