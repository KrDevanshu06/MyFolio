import Link from "next/link";
import { NavHeader } from "@/components/nav-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Archive | Devanshu Kumar Prasad",
  description: "A complete catalog of engineering logs, certifications, and experiments.",
};

export default function Archive() {
  const items = [
    {
      year: "2025",
      project: "Summer Analytics Hackathon",
      type: "Award",
      stack: ["IIT Guwahati", "Winner"],
      link: "#",
    },
    {
      year: "2025",
      project: "Movie Recommendation System",
      type: "Internship",
      stack: ["Python", "SVD", "KNN"],
      link: "/projects/movie-recommendation",
    },
    {
      year: "2025",
      project: "McKinsey Forward Learning",
      type: "Certification",
      stack: ["Critical Thinking", "Problem Solving"],
      link: "#",
    },
    {
      year: "2025",
      project: "AI Career Companion",
      type: "Project",
      stack: ["GenAI", "Gemini Pro"],
      link: "/projects/ai-career-companion",
    },
    {
      year: "2025",
      project: "Code in Place",
      type: "Certification",
      stack: ["Stanford University", "Python"],
      link: "#",
    },
    {
      year: "2025",
      project: "Forest Fire Detection",
      type: "Project",
      stack: ["CNN", "Deep Learning"],
      link: "/projects/forest-fire-detection",
    },
    {
      year: "2024",
      project: "Plant Disease Detection",
      type: "Project",
      stack: ["TensorFlow", "Scikit-learn"],
      link: "/projects/plant-disease-detection",
    },
    {
      year: "2024",
      project: "Google Cloud Certification",
      type: "Certification",
      stack: ["Cloud Skills Boost"],
      link: "#",
    },
    {
      year: "2024",
      project: "AWS Cloud Practitioner",
      type: "Certification",
      stack: ["AWS Essentials"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-teal-500/20">
      <NavHeader />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <header className="mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-slate-100 mb-6">
              Archive
            </h1>
            <p className="font-sans text-slate-400 max-w-xl text-lg">
              A comprehensive log of projects, certifications, and achievements.
            </p>
          </header>

          {/* The Database Table Layout */}
          <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="text-xs uppercase bg-slate-900/50 text-slate-300 font-mono border-b border-slate-800">
                <tr>
                  <th scope="col" className="px-6 py-4">Year</th>
                  <th scope="col" className="px-6 py-4">Entry</th>
                  <th scope="col" className="px-6 py-4 hidden md:table-cell">Type</th>
                  <th scope="col" className="px-6 py-4 hidden lg:table-cell">Tags</th>
                  <th scope="col" className="px-6 py-4">Link</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                {items.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-slate-800/50 hover:bg-slate-900/30 transition-colors group"
                  >
                    <td className="px-6 py-4 text-teal-500">{item.year}</td>
                    <td className="px-6 py-4 font-bold text-slate-200 group-hover:text-teal-400 transition-colors">
                      {item.project}
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">{item.type}</td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <div className="flex gap-2 flex-wrap">
                        {item.stack.map(tech => (
                          <Badge key={tech} variant="outline" className="border-slate-800 text-xs text-slate-500">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link 
                        href={item.link} 
                        target={item.link.startsWith("http") ? "_blank" : "_self"}
                        className="inline-flex items-center text-slate-400 hover:text-teal-400"
                      >
                        <span className="hidden md:inline mr-2">View</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
