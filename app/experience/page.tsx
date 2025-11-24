import { NavHeader } from "@/components/nav-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Experience | Devanshu Kumar Prasad",
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
                      Ganga Institute of Technology
                    </h3>
                    <span className="font-mono text-sm text-slate-500">Aug 2024 — Jul 2027</span>
                  </div>
                  <p className="text-slate-400 mb-2">Bachelor of Technology in Computer Science</p>
                  <div className="text-sm text-slate-500">Jhajjar, Haryana</div>
                </div>

                <div className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl text-slate-200 group-hover:text-teal-400 transition-colors">
                      Government Polytechnic Adityapur
                    </h3>
                    <span className="font-mono text-sm text-slate-500">Dec 2021 — Jul 2024</span>
                  </div>
                  <p className="text-slate-400 mb-2">Diploma in Computer Science</p>
                  <div className="text-sm text-slate-500">Jamshedpur, Jharkhand</div>
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
                      Data Associate L1 Intern
                    </h3>
                    <span className="font-mono text-sm text-slate-500">May 2025 — Aug 2025</span>
                  </div>
                  <p className="text-slate-400 mb-4">Infotact Solutions • Remote</p>
                  <ul className="list-disc list-inside text-slate-500 space-y-2 text-sm">
                    <li>Developed a movie recommendation system using SVD and KNN models (81.02% Precision).</li>
                    <li>Led the project team, coordinating tasks and managing timelines for successful delivery.</li>
                  </ul>
                </div>

                <div className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl text-slate-200 group-hover:text-teal-400 transition-colors">
                      Artificial Intelligence Intern
                    </h3>
                    <span className="font-mono text-sm text-slate-500">Mar 2025 — May 2025</span>
                  </div>
                  <p className="text-slate-400 mb-4">Edunet Foundation (Shell & Microsoft) • Remote</p>
                  <ul className="list-disc list-inside text-slate-500 space-y-2 text-sm">
                    <li>Designed CNN model for forest fire detection achieving &gt;90% accuracy.</li>
                    <li>Optimized data preprocessing to reduce false alarms by 30%.</li>
                    <li>Gained practical knowledge of Azure AI services and deployment.</li>
                  </ul>
                </div>

                <div className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl text-slate-200 group-hover:text-teal-400 transition-colors">
                      Artificial Intelligence Intern
                    </h3>
                    <span className="font-mono text-sm text-slate-500">Dec 2024 — Jan 2025</span>
                  </div>
                  <p className="text-slate-400 mb-4">Edunet Foundation (Microsoft & SAP) • Remote</p>
                  <ul className="list-disc list-inside text-slate-500 space-y-2 text-sm">
                    <li>Developed Plant Disease Detection model using TensorFlow (92% accuracy).</li>
                    <li>Processed 10,000+ leaf images using Python and Pandas.</li>
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
