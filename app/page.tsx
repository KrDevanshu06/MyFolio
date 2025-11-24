import { NavHeader } from "@/components/nav-header";
import { NeuralHero } from "@/components/neural-hero";
import { ResearchCard } from "@/components/research-card";
import { ContactSection } from "@/components/contact-section";
import { CommandMenu } from "@/components/command-menu";
import { TechStack } from "@/components/tech-stack";
import { Trajectory } from "@/components/trajectory";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const projects = [
    {
      title: "AI Career Companion",
      category: "Generative AI",
      metrics: "Powered by Gemini Pro",
      abstract: "Developed a GenAI-powered assistant for career guidance, integrating Gemini Pro with session tracking, logs, and CSV export for analytics. Designed to provide personalized educational roadmaps.",
      techStack: ["Python", "GenAI", "Pandas", "NumPy"],
      link: "/projects/ai-career-companion",
    },
    {
      title: "Forest Fire Detection System",
      category: "Computer Vision",
      metrics: "90% Accuracy",
      abstract: "Designed and trained a CNN model for forest fire detection on a large aerial image dataset. Implemented optimized data preprocessing to reduce false alarms by 30% and managed GPU overhead.",
      techStack: ["Python", "TensorFlow", "CNN", "Matplotlib"],
      link: "/projects/forest-fire-detection",
    },
    {
      title: "Plant Disease Detection System",
      category: "Agricultural AI",
      metrics: "92% Accuracy",
      abstract: "Processed and analyzed a dataset of over 10,000+ leaf images using Deep Learning. Achieved high accuracy in disease classification to aid early agricultural intervention.",
      techStack: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      link: "/projects/plant-disease-detection",
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 selection:bg-teal-500/20">
      <CommandMenu />
      <NavHeader />
      <NeuralHero />

      {/* Academic/Stats Section */}
      <section id="research" className="py-24 px-6 bg-slate-950 scroll-mt-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="font-mono text-teal-500 text-sm mb-2">Education</h3>
              <p className="font-serif text-2xl text-slate-100">Ganga Institute</p>
              <p className="text-slate-500 text-sm mt-1">B.Tech CSE (2027)</p>
            </div>
            <div>
              <h3 className="font-mono text-teal-500 text-sm mb-2">Performance</h3>
              <p className="font-serif text-2xl text-slate-100">Hackathon Winner</p>
              <p className="text-slate-500 text-sm mt-1">IIT Guwahati Summer Analytics</p>
            </div>
            <div>
              <h3 className="font-mono text-teal-500 text-sm mb-2">Focus</h3>
              <p className="font-serif text-2xl text-slate-100">AI & Systems</p>
              <p className="text-slate-500 text-sm mt-1">Full Stack / GenAI</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-slate-900" />
      
      {/* Trajectory Timeline */}
      <Trajectory />

      <Separator className="bg-slate-900" />
      
      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects / Case Studies */}
      <section id="projects" className="py-24 bg-slate-950 scroll-mt-28">
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
      <SiteFooter />
    </main>
  );
}
