"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Briefcase, Code, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Trajectory() {
  const timeline = [
    {
      year: "May 2025 - Aug 2025",
      title: "Infotact Solutions",
      role: "Data Associate L1 Intern",
      description: "Developed a movie recommendation system using SVD and KNN models (81.02% Precision). Led the project team and managed delivery timelines.",
      icon: Database,
      tags: ["Data Science", "SVD/KNN", "Leadership"]
    },
    {
      year: "Mar 2025 - May 2025",
      title: "Edunet Foundation",
      role: "Artificial Intelligence Intern",
      description: "Dual internship (Shell & Microsoft). Designed CNN models for forest fire detection and gained expertise in Azure AI ecosystem.",
      icon: Briefcase,
      tags: ["CNN", "TensorFlow", "Azure"]
    },
    {
      year: "Dec 2024 - Jan 2025",
      title: "Edunet Foundation (Microsoft & SAP)",
      role: "Artificial Intelligence Intern",
      description: "Developed a Plant Disease Detection model achieving 92% accuracy. Processed 10k+ leaf images using Python and Pandas.",
      icon: Briefcase,
      tags: ["Deep Learning", "Computer Vision"]
    },
    {
      year: "Aug 2025",
      title: "Summer Analytics Hackathon",
      role: "IIT Guwahati",
      description: "Secured a winning position among top 50 participants in a national-level analytics event.",
      icon: Trophy,
      tags: ["Winner", "Analytics"]
    },
  ];

  return (
    <section id="trajectory" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-100 mb-16 text-center">
          System Trajectory
        </h2>

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-32 bottom-0 w-px bg-slate-800 md:-translate-x-1/2" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-950 border-2 border-teal-500 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 -translate-x-1/2">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2">
                <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-500/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-md bg-slate-800 text-teal-400">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs text-teal-500">{item.year}</span>
                    </div>
                    
                    <h3 className="font-serif text-xl text-slate-100 mb-1">{item.title}</h3>
                    <p className="font-mono text-xs text-slate-500 mb-3 uppercase tracking-wide">
                      {item.role}
                    </p>
                    <p className="font-sans text-slate-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px] border-slate-700 text-slate-500">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Empty Spacer for Alternating Layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
