import { NavHeader } from "@/components/nav-header";
import { NeuralHero } from "@/components/neural-hero";
import { ResearchCard } from "@/components/research-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Distributed Data Pipeline",
      category: "Systems Engineering",
      metrics: "Throughput: 10k req/s",
      abstract: "Designed a fault-tolerant data ingestion layer utilizing Apache Kafka for event streaming and MinIO for object storage. Implemented a microservices architecture orchestrated via Docker Compose to ensure scalable processing of unstructured data streams.",
      techStack: ["PostgreSQL", "Kafka", "MinIO", "Docker", "Go"],
    },
    {
      title: "Commit Streak Gamification",
      category: "Web Application",
      metrics: "User Retention: +40%",
      abstract: "Developed a client-facing web application designed to visualize and gamify GitHub commit streaks. Utilized the GitHub API to fetch real-time data, rendering heatmaps and engagement metrics to encourage consistent open-source contribution.",
      techStack: ["Next.js", "TypeScript", "Tailwind", "GitHub API"],
    },
    {
      title: "Alumni Association Platform",
      category: "Smart India Hackathon",
      metrics: "Team Lead",
      abstract: "Architected a centralized platform for alumni data management to solve fragmentation issues in institutional networking. Implemented role-based access control (RBAC) and optimized database queries for handling large-scale alumni directories.",
      techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Algorithmic Optimization Suite",
      category: "Competitive Programming",
      metrics: "CGPA: 8.5/10.0",
      abstract: "A collection of optimized solutions for NP-hard problems and graph theory challenges. Focus on reducing time complexity from O(n²) to O(n log n) using advanced data structures and dynamic programming techniques.",
      techStack: ["C++", "Python", "Algorithms", "Data Structures"],
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 selection:bg-teal-500/20">
      <NavHeader />
      
      {/* Hero Section */}
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
                <ResearchCard {...project} link="#" />
                {/* Add separator between cards unless it's the last one */}
                {index < projects.length - 1 && <Separator className="bg-slate-900" />} 
            </div>
          ))}
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="py-32 px-6 text-center bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-100 mb-8">
            Let&apos;s Build the Future
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Currently open for opportunities in Backend Engineering and ML Research.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white font-sans">
              Initiate Collaboration
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:text-white font-mono bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        <footer className="mt-32 text-slate-600 font-mono text-xs">
          <p>© 2025. Engineered in Next.js & Tailwind.</p>
        </footer>
      </section>
    </main>
  );
}
