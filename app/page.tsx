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
      title: "DailyDiff: Ethical Streak Maintainer",
      category: "Open Source Tool",
      metrics: "Active Package",
      abstract: "A developer productivity tool designed to maintain GitHub streaks ethically. Built with React, Node.js, and Supabase to automate contribution tracking without compromising integrity.",
      techStack: ["React", "Node.js", "Supabase", "Cron Jobs"],
      link: "/projects/dailydiff",
    },
    {
      title: "Movie Recommendation System",
      category: "Data Science",
      metrics: "81.02% Precision",
      abstract: "Developed a collaborative filtering system using SVD and KNN models during my internship at Infotact. Achieved an RMSE of 0.766, significantly improving recommendation quality.",
      techStack: ["Python", "Scikit-Learn", "SVD", "KNN"],
      link: "/projects/movie-recommendation",
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
      title: "AI Career Companion",
      category: "Generative AI",
      metrics: "Powered by Gemini Pro",
      abstract: "Developed a GenAI-powered assistant for career guidance, integrating Gemini Pro with session tracking, logs, and CSV export for analytics.",
      techStack: ["Python", "GenAI", "Pandas", "NumPy"],
      link: "/projects/ai-career-companion",
    },
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
              <h3 className="font-mono text-teal-500 text-sm mb-2">Distinction</h3>
              <p className="font-serif text-2xl text-slate-100">Hackathon Winner</p>
              <p className="text-slate-500 text-sm mt-1">IIT Guwahati Summer Analytics</p>
            </div>
            <div>
              <h3 className="font-mono text-teal-500 text-sm mb-2">Specialization</h3>
              <p className="font-serif text-2xl text-slate-100">Data & Systems</p>
              <p className="text-slate-500 text-sm mt-1">AI / Backend / Cloud</p>
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
            A curated selection of engineering challenges, open-source tools, and AI research initiatives.
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
