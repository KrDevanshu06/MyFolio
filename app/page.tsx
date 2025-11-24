import { NavHeader } from "@/components/nav-header";
import { NeuralHero } from "@/components/neural-hero";
import { ResearchCard } from "@/components/research-card";
import { ContactSection } from "@/components/contact-section";
import { CommandMenu } from "@/components/command-menu";
import { TechStack } from "@/components/tech-stack";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const projects = [
    {
      title: "Neural Network Optimization using Gradient Descent Variants",
      category: "Machine Learning Research",
      metrics: "94.7% accuracy with Adam",
      abstract: "This research investigates the performance characteristics of various gradient descent optimization algorithms including SGD, Adam, RMSprop, and AdaGrad across different neural network architectures.",
      techStack: ["Python", "TensorFlow", "NumPy", "Matplotlib", "Research"],
      link: "/projects/neural-optimization", // Matches content/projects/neural-optimization.mdx
    },
    {
      title: "Scalable Microservices Architecture with Event-Driven Design",
      category: "Backend Development",
      metrics: "10k+ req/s throughput",
      abstract: "Building fault-tolerant distributed systems using message queues and container orchestration. This project demonstrates the implementation of a resilient microservices architecture capable of handling high-throughput data processing.",
      techStack: ["Go", "Kafka", "Docker", "PostgreSQL", "Kubernetes"],
      link: "/projects/microservices-architecture", // Matches content/projects/microservices-architecture.mdx
    },
    {
      title: "Alumni Association Platform",
      category: "Smart India Hackathon",
      metrics: "Team Lead",
      abstract: "Architected a centralized platform for alumni data management to solve fragmentation issues in institutional networking. Implemented role-based access control (RBAC) and optimized database queries.",
      techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
      // 👇 NEW LINK ADDED
      link: "/projects/alumni-platform", 
    },
    {
      title: "Gamification of Developer Activity via Commit Streaks",
      category: "Developer Tools",
      metrics: "40% user retention increase",
      abstract: "A behavioral study and software implementation designed to increase open-source contribution consistency. We architected a real-time rendering engine that visualizes GitHub API data, resulting in measurable improvements in developer engagement.",
      techStack: ["Next.js", "TypeScript", "GitHub API", "Tailwind", "Redis"],
      link: "/projects/commit-streak", 
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 selection:bg-teal-500/20">
      <CommandMenu />
      <NavHeader />
      <NeuralHero />

      {/* Academic/Stats Section */}
      <section id="research" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="font-mono text-teal-500 text-sm mb-2">Education</h3>
              <p className="font-serif text-2xl text-slate-100">NIT Jamshedpur</p>
              <p className="text-slate-500 text-sm mt-1">B.Tech Computer Science</p>
            </div>
            <div>
              <h3 className="font-mono text-teal-500 text-sm mb-2">Performance</h3>
              <p className="font-serif text-2xl text-slate-100">8.5 CGPA</p>
              <p className="text-slate-500 text-sm mt-1">Consistent Academic Excellence</p>
            </div>
            <div>
              <h3 className="font-mono text-teal-500 text-sm mb-2">Focus</h3>
              <p className="font-serif text-2xl text-slate-100">Systems & AI</p>
              <p className="text-slate-500 text-sm mt-1">Backend / Machine Learning</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-slate-900" />
      
      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects / Case Studies */}
      <section id="projects" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-100 mb-6">
            Selected Works
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl">
            A curated selection of engineering challenges and research initiatives.
          </p>
        </div>

        <div className="w-full">
          {projects.map((project, index) => (
            <div key={index}>
                <ResearchCard {...project} />
                {index < projects.length - 1 && <Separator className="bg-slate-900" />} 
            </div>
          ))}
        </div>
      </section>

      {/* Contact / Footer */}
      <ContactSection />
    </main>
  );
}
