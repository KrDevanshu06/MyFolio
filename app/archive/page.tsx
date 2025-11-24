"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavHeader } from "@/components/nav-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { 
  Archive as ArchiveIcon, 
  Filter, 
  Github, 
  Globe, 
  Link as LinkIcon 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Define the Data Structure
// Added 'github' and 'demo' for projects, kept 'link' for others
const items = [
  {
    year: "2025",
    project: "DailyDiff-Ethical Streak Maintainer for Github",
    type: "Project",
    stack: ["React", "Node.js", "Supabase", "node-cron"],
    github: "https://github.com/KrDevanshu06/DailyDiff",
    demo: "https://daily-diff.vercel.app/", // Add live link here
  },
  {
    year: "2025",
    project: "Summer Analytics Hackathon",
    type: "Award",
    stack: ["IIT Guwahati", "Winner"],
    link: "#", // Verification Link
  },
  {
    year: "2025",
    project: "Aspire Leaders Program",
    type: "Certification",
    stack: ["Aspire Institute", "Leadership", "Communication"],
    link: "#", // Verification Link
  },
  {
    year: "2025",
    project: "Movie Recommendation System",
    type: "Project",
    stack: ["Python", "SVD", "KNN"],
    github: "https://github.com/KrDevanshu06/RecommEngineX",
    demo: "https://www.kaggle.com/code/devanshukumarprasad/recommenginex-1-0", // Add live link here
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
    github: "#",
    demo: "https://www.kaggle.com/code/devanshukumarprasad/genai-capstone-project-career-companion",
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
    github: "https://github.com/KrDevanshu06/Forest-Fire-Detection-using-DL",
    demo: "#",
  },
  {
    year: "2024",
    project: "Plant Disease Detection",
    type: "Project",
    stack: ["TensorFlow", "Scikit-learn"],
    github: "https://github.com/KrDevanshu06/Plant-Disease-Detection-System-for-Sustainable-Agriculture",
    demo: "#",
  },
  {
    year: "2024",
    project: "Google Business Intelligence",
    type: "Certification",
    stack: ["Google", "Analytics"],
    link: "https://coursera.org/verify/professional-cert/QGBKY44GXF8H",
  },
  {
    year: "2024",
    project: "Python Programming",
    type: "Certification",
    stack: ["GUVI"],
    link: "https://www.guvi.in/verify-certificate?id=19o70Zk0IV6h096420",
  },
  {
    year: "2024",
    project: "Google Cloud Certification",
    type: "Certification",
    stack: ["Cloud Skills Boost"],
    link: "https://www.credly.com/users/krdevanshu06/badges",
  },
  {
    year: "2024",
    project: "AWS Cloud Practitioner",
    type: "Certification",
    stack: ["AWS Essentials"],
    link: "#",
  },
];

// Extract unique categories for the sidebar
const categories = ["All", ...Array.from(new Set(items.map((item) => item.type)))];

export default function Archive() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter logic
  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.type === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-teal-500/20">
      <NavHeader />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-900/20 rounded-lg">
                <ArchiveIcon className="w-6 h-6 text-teal-500" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-slate-100">
                Archive
              </h1>
            </div>
            <p className="font-sans text-slate-400 max-w-xl text-lg ml-1">
              A categorical log of engineering milestones, research, and certifications.
            </p>
          </header>

          {/* Split Screen Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* LEFT SIDE: Category Sidebar */}
            <aside className="md:col-span-1 space-y-8">
              <div className="sticky top-32">
                <div className="flex items-center gap-2 mb-6 text-xs font-mono text-slate-500 uppercase tracking-widest">
                  <Filter className="w-3 h-3" />
                  Filter by Type
                </div>
                
                <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "text-left px-4 py-3 rounded-md text-sm font-mono transition-all duration-300 border border-transparent whitespace-nowrap",
                        selectedCategory === category
                          ? "bg-teal-950/30 text-teal-400 border-teal-500/30 translate-x-2"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                      )}
                    >
                      {category === "All" ? "/ All_Logs" : `/ ${category}`}
                      {selectedCategory === category && (
                        <span className="ml-2 text-teal-500 animate-pulse">●</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* RIGHT SIDE: Content List */}
            <div className="md:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-600">
                  Showing {filteredItems.length} records
                </span>
                <div className="h-px bg-slate-800 flex-1 ml-4" />
              </div>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={`${item.project}-${index}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="group relative bg-slate-900/20 border border-slate-800 rounded-lg p-5 hover:border-teal-500/30 hover:bg-slate-900/40 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          
                          {/* Year & Title */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-mono text-xs text-teal-500">{item.year}</span>
                              <Badge variant="outline" className="border-slate-800 text-[10px] text-slate-500">
                                {item.type}
                              </Badge>
                            </div>
                            <h3 className="font-serif text-xl text-slate-200 group-hover:text-teal-400 transition-colors">
                              {item.project}
                            </h3>
                          </div>

                          {/* Tech Stack & Links */}
                          <div className="flex flex-col md:items-end gap-3">
                            <div className="flex flex-wrap gap-2 md:justify-end">
                              {item.stack.map((tech) => (
                                <span key={tech} className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800/50">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center gap-3 mt-1">
                              {/* Renders GitHub & Demo for Projects */}
                              {((item as any).github || (item as any).demo) ? (
                                <>
                                  {(item as any).github && (
                                    <Link 
                                      href={(item as any).github} 
                                      target="_blank"
                                      className="text-slate-400 hover:text-teal-400 transition-colors"
                                      title="View Source Code"
                                    >
                                      <Github className="w-4 h-4" />
                                    </Link>
                                  )}
                                  {(item as any).demo && (
                                    <Link 
                                      href={(item as any).demo} 
                                      target="_blank"
                                      className="text-slate-400 hover:text-teal-400 transition-colors"
                                      title="Live Deployment"
                                    >
                                      <Globe className="w-4 h-4" />
                                    </Link>
                                  )}
                                </>
                              ) : (
                                /* Renders Standard Link for Certifications/Awards */
                                <Link 
                                  href={(item as any).link || "#"} 
                                  target={(item as any).link?.startsWith("http") ? "_blank" : "_self"}
                                  className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                  {(item as any).type === "Certification" ? "Verify" : "View Entry"} 
                                  <LinkIcon className="w-3 h-3 ml-2 text-teal-500" />
                                </Link>
                              )}
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {filteredItems.length === 0 && (
                  <div className="py-20 text-center border border-dashed border-slate-800 rounded-lg">
                    <p className="font-mono text-slate-500">No records found in this sector.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
