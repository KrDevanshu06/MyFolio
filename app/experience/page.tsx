import { NavHeader } from "@/components/nav-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Experience | KrDevanshu06",
  description: "Professional trajectory and academic history.",
};

export default function Experience() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-teal-500/20">
      <NavHeader />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="flex justify-between items-start mb-16">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-slate-100 mb-4">
                Experience
              </h1>
              <p className="font-sans text-slate-400">
                My professional career and academic background.
              </p>
            </div>
            {/* FIX: Use asChild with an anchor tag instead of onClick handler */}
            <Button variant="outline" className="border-slate-700 hidden md:flex" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> PDF Resume
              </a>
            </Button>
          </div>

          <div className="space-y-16">
            {/* Education Block */}
            <section>
              <h2 className="font-mono text-sm text-teal-500 mb-8 uppercase tracking-widest">
                01. Education
              </h2>
              
              <div className="space-y-8">
                <div className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl text-slate-200 group-hover:text-teal-400 transition-colors">
                      NIT Jamshedpur
                    </h3>
                    <span className="font-mono text-sm text-slate-500">2021 — 2025</span>
                  </div>
                  <p className="text-slate-400 mb-4">Bachelor of Technology in Computer Science & Engineering</p>
                  <ul className="list-disc list-inside text-slate-500 space-y-2 text-sm">
                    <li>CGPA: <span className="text-slate-300">8.5 / 10.0</span></li>
                    <li>Relevant Coursework: Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, Compiler Design.</li>
                    <li>Key Achievement: Finalist in Smart India Hackathon 2023.</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-900" />

            {/* Work History Block */}
            <section>
              <h2 className="font-mono text-sm text-teal-500 mb-8 uppercase tracking-widest">
                02. Professional History
              </h2>
              
              <div className="space-y-12">
                <div className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl text-slate-200 group-hover:text-teal-400 transition-colors">
                      Full Stack Developer Intern
                    </h3>
                    <span className="font-mono text-sm text-slate-500">Summer 2024</span>
                  </div>
                  <p className="text-slate-400 mb-4">TechCorp Inc. • Remote</p>
                  <ul className="list-disc list-inside text-slate-500 space-y-2 text-sm">
                    <li>Optimized PostgreSQL database queries reducing report generation time by <span className="text-teal-500">40%</span>.</li>
                    <li>Integrated Redis caching layer to handle high-concurrency API requests during peak loads.</li>
                    <li>Migrated legacy React class components to Functional components with Hooks.</li>
                  </ul>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="secondary" className="bg-slate-900 text-slate-400">React</Badge>
                    <Badge variant="secondary" className="bg-slate-900 text-slate-400">PostgreSQL</Badge>
                    <Badge variant="secondary" className="bg-slate-900 text-slate-400">Redis</Badge>
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl text-slate-200 group-hover:text-teal-400 transition-colors">
                      Open Source Contributor
                    </h3>
                    <span className="font-mono text-sm text-slate-500">2022 — Present</span>
                  </div>
                  <p className="text-slate-400 mb-4">GitHub Community</p>
                  <ul className="list-disc list-inside text-slate-500 space-y-2 text-sm">
                    <li>Contributed to documentation and bug fixes for popular libraries like Shadcn UI and Next.js examples.</li>
                    <li>Maintained &quot;Commit Streak,&quot; a tool used by 100+ developers to track productivity.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
