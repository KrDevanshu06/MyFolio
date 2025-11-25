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
  Link as LinkIcon,
  Eye,
  ExternalLink,
  Loader2,
  FileText
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// DATA STRUCTURE
const items = [
  {
    year: "2025",
    project: "DailyDiff-Ethical Streak Maintainer",
    type: "Project",
    stack: ["React", "Supabase"],
    github: "https://github.com/KrDevanshu06/DailyDiff",
    demo: "https://daily-diff.vercel.app/",
  },
  {
    year: "2025",
    project: "Summer Analytics Hackathon",
    type: "Award",
    stack: ["IIT Guwahati", "Winner"],
    file: "/certificates/summer-analytics.png",
    link: "https://www.iitg.ac.in", 
  },
  {
    year: "2025",
    project: "GenAI Hack2Skill Competition",
    type: "Award",
    stack: ["Hack2skill", "Programming", "Competition"],
    file: "/certificates/hack2skill-genai.png",
    link: "https://hack2skill.com", 
  },
  {
    year: "2025",
    project: "Aspire Leaders Program",
    type: "Certification",
    stack: ["Aspire Institute", "Leadership", "Communication"],
    file: "/certificates/aspire-leaders.pdf",
    link: "https://www.aspireleaders.org", 
  },
  {
    year: "2025",
    project: "Movie Recommendation System",
    type: "Project",
    stack: ["Python", "SVD", "KNN"],
    github: "https://github.com/KrDevanshu06/RecommEngineX",
    demo: "https://www.kaggle.com/code/devanshukumarprasad/recommenginex-1-0",
  },
  {
    year: "2025",
    project: "McKinsey Forward Learning",
    type: "Certification",
    stack: ["Critical Thinking", "Problem Solving"],
    file: "certificates/mckinsey-forward-learning.pdf",
    link: "https://www.mckinsey.com/learning", 
  },
  {
    year: "2024",
    project: "UX Design Foundation",
    type: "Certification",
    stack: ["User Experience", "Design"],
    file: "/certificates/ux-foundation.pdf",
    link: "https://coursera.org/verify/professional-cert/UX123", 
  },
  {
    year: "2024",
    project: "AWS Networking Basics",
    type: "Certification",
    stack: ["AWS", "Networking"],
    file: "/certificates/aws-networking.pdf",
    link: "https://aws.amazon.com/verification", 
  },
  {
    year: "2024",
    project: "CCNA 200-301 Network Fundamentals",
    type: "Certification",
    stack: ["Cisco", "Networking"],
    file: "/certificates/ccna-fundamentals.pdf",
    link: "https://www.cisco.com/verify", 
  },
  {
    year: "2024",
    project: "Computer Networking Fundamentals",
    type: "Certification",
    stack: ["Networking", "IT"],
    file: "/certificates/computer-networking.pdf",
    link: "https://coursera.org/verify/networking123", 
  },
  {
    year: "2024",
    project: "Data Models and Pipelines",
    type: "Certification",
    stack: ["Data Science", "Analytics"],
    file: "/certificates/data-models-and-pipelines.pdf",
    link: "https://coursera.org/verify/data123", 
  },
  {
    year: "2024",
    project: "Business Decisions & Dashboards",
    type: "Certification",
    stack: ["Analytics", "BI"],
    file: "/certificates/decisions-dashboards.pdf",
    link: "https://coursera.org/verify/dashboards123",
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
    file: "/certificates/Devanshu Kumar Prasad Appreciation Certificate.pdf",
    link: "https://codeinplace.stanford.edu", 
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
    project: "Google Business Intelligence Professional",
    type: "Certification",
    stack: ["Google", "Analytics", "BI"],
    file: "/certificates/business-intelligence.pdf",
    link: "https://coursera.org/verify/professional-cert/QGBKY44GXF8H",
  },
  {
    year: "2024",
    project: "Python Programming",
    type: "Certification",
    stack: ["GUVI", "Python"],
    file: "/certificates/python-guvi.png",
    link: "https://www.guvi.in/verify-certificate?id=19o70Zk0IV6h096420",
  },
];

// Extract unique categories for the sidebar
const categories = ["All", ...Array.from(new Set(items.map((item) => item.type)))];

export default function Archive() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Filter Logic
  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.type === selectedCategory;
  });

  // Handler to open modal
  const handleVerifyClick = (item: any) => {
    setActiveItem(item);
    setIsLoading(true); // Reset loading state
    setViewerOpen(true);
  };

  const isImage = (file: string) => file?.match(/\.(jpeg|jpg|gif|png|webp)$/) != null;

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
              <h1 className="font-serif text-4xl md:text-5xl text-slate-100">Archive</h1>
            </div>
            <p className="font-sans text-slate-400 max-w-xl text-lg ml-1">
              A categorical log of engineering milestones, research, and certifications.
            </p>
          </header>

          {/* Split Screen Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Sidebar */}
            <aside className="md:col-span-1 space-y-8">
              <div className="sticky top-32">
                <div className="flex items-center gap-2 mb-6 text-xs font-mono text-slate-500 uppercase tracking-widest">
                  <Filter className="w-3 h-3" /> Filter by Type
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
                      {selectedCategory === category && <span className="ml-2 text-teal-500 animate-pulse">●</span>}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Content List */}
            <div className="md:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-600">Showing {filteredItems.length} records</span>
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
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-mono text-xs text-teal-500">{item.year}</span>
                              <Badge variant="outline" className="border-slate-800 text-[10px] text-slate-500">{item.type}</Badge>
                            </div>
                            <h3 className="font-serif text-xl text-slate-200 group-hover:text-teal-400 transition-colors">{item.project}</h3>
                          </div>

                          <div className="flex flex-col md:items-end gap-3">
                            <div className="flex flex-wrap gap-2 md:justify-end">
                              {item.stack.map((tech) => (
                                <span key={tech} className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800/50">{tech}</span>
                              ))}
                            </div>
                            
                            <div className="flex items-center gap-3 mt-1">
                              {/* Render Logic: Projects get Git/Demo links, Certs get "View" button */}
                              {((item as any).github || (item as any).demo) ? (
                                <>
                                  {(item as any).github && <Link href={(item as any).github} target="_blank" className="text-slate-400 hover:text-teal-400 transition-colors"><Github className="w-4 h-4" /></Link>}
                                  {(item as any).demo && <Link href={(item as any).demo} target="_blank" className="text-slate-400 hover:text-teal-400 transition-colors"><Globe className="w-4 h-4" /></Link>}
                                </>
                              ) : (
                                <button 
                                  onClick={() => handleVerifyClick(item)}
                                  className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors cursor-pointer hover:bg-slate-800 px-2 py-1 rounded-md group/btn"
                                >
                                  Verify <Eye className="w-3 h-3 ml-2 text-teal-500 group-hover/btn:text-teal-400" />
                                </button>
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

      {/* FILE VIEWER MODAL */}
      <Dialog open={viewerOpen} onOpenChange={setViewerOpen}>
        <DialogContent className="max-w-5xl h-[85vh] bg-slate-950 border-slate-800 flex flex-col p-0 overflow-hidden outline-none">
          
          {/* Modal Header - Contains the "View Original" Button */}
          <DialogHeader className="px-6 py-4 border-b border-slate-800 bg-slate-950 z-10 flex flex-row items-center justify-between shrink-0">
            <div>
              <DialogTitle className="font-serif text-slate-100 text-lg truncate max-w-[200px] md:max-w-md">
                {activeItem?.project}
              </DialogTitle>
              <DialogDescription className="font-mono text-xs text-teal-500">
                Secure Document Viewer
              </DialogDescription>
            </div>
            
            {/* The Redirect Button */}
            {activeItem?.link && (
              <Button 
                variant="default" 
                size="sm" 
                className="bg-teal-600 hover:bg-teal-500 text-white gap-2 mr-6"
                onClick={() => window.open(activeItem.link, '_blank')}
              >
                View Original <ExternalLink className="w-3 h-3" />
              </Button>
            )}
          </DialogHeader>

          {/* Viewer Area */}
          <div className="flex-1 bg-slate-900 relative w-full h-full flex items-center justify-center overflow-hidden">
            
            {/* Loading Spinner */}
            {isLoading && activeItem?.file && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 z-0">
                <Loader2 className="w-8 h-8 animate-spin text-teal-500 mb-4" />
                <p className="font-mono text-sm">Fetching document...</p>
              </div>
            )}

            {activeItem?.file ? (
              /* Render PDF or Image */
              isImage(activeItem.file) ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img 
                  src={activeItem.file} 
                  alt="Proof" 
                  className="max-w-full max-h-full object-contain shadow-2xl relative z-10"
                  onLoad={() => setIsLoading(false)}
                />
              ) : (
                <iframe 
                  src={`${activeItem.file}#toolbar=0&view=FitH`}
                  className="w-full h-full border-0 relative z-10 bg-white"
                  onLoad={() => setIsLoading(false)}
                />
              )
            ) : (
              /* Fallback if no local file exists */
              <div className="text-center max-w-md p-6">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-serif text-slate-200 mb-2">Document Not Cached</h3>
                <p className="text-slate-400 mb-6 text-sm">
                  This credential is hosted externally. Please use the link above to verify.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  );
}
