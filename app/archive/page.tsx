import Link from "next/link";
import { NavHeader } from "@/components/nav-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Archive | KrDevanshu06",
  description: "A complete catalog of engineering logs and experiments.",
};

export default function Archive() {
  const projects = [
    {
      year: "2024",
      project: "Commit Streak Gamification",
      madeAt: "Personal",
      builtWith: ["Next.js", "Redis", "GitHub API"],
      link: "https://github.com/krdevanshu06/commit-streak",
    },
    {
      year: "2024",
      project: "Neural Network Optimizer",
      madeAt: "Research",
      builtWith: ["Python", "TensorFlow"],
      link: "/projects/neural-optimization",
    },
    {
      year: "2023",
      project: "Alumni Platform",
      madeAt: "Smart India Hackathon",
      builtWith: ["React", "Node.js", "AWS"],
      link: "https://github.com/krdevanshu06/alumni-platform",
    },
    {
      year: "2023",
      project: "Distributed Data Pipeline",
      madeAt: "Systems Engineering",
      builtWith: ["Go", "Kafka", "Docker"],
      link: "/projects/microservices-architecture",
    },
    {
      year: "2022",
      project: "Algorithmic Suite",
      madeAt: "Competitive Programming",
      builtWith: ["C++", "STL"],
      link: "https://github.com/krdevanshu06/cpp-algo",
    },
    {
      year: "2022",
      project: "Portfolio v1",
      madeAt: "Personal",
      builtWith: ["HTML", "SCSS", "JS"],
      link: "https://v1.krdevanshu.com", // Example
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
              A comprehensive list of things I&apos;ve built, broken, and re-assembled.
            </p>
          </header>

          {/* The Database Table Layout */}
          <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="text-xs uppercase bg-slate-900/50 text-slate-300 font-mono border-b border-slate-800">
                <tr>
                  <th scope="col" className="px-6 py-4">Year</th>
                  <th scope="col" className="px-6 py-4">Project</th>
                  <th scope="col" className="px-6 py-4 hidden md:table-cell">Made at</th>
                  <th scope="col" className="px-6 py-4 hidden lg:table-cell">Built with</th>
                  <th scope="col" className="px-6 py-4">Link</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                {projects.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-slate-800/50 hover:bg-slate-900/30 transition-colors group"
                  >
                    <td className="px-6 py-4 text-teal-500">{item.year}</td>
                    <td className="px-6 py-4 font-bold text-slate-200 group-hover:text-teal-400 transition-colors">
                      {item.project}
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">{item.madeAt}</td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <div className="flex gap-2 flex-wrap">
                        {item.builtWith.map(tech => (
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
