"use client";

import { NavHeader } from "@/components/nav-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Download, 
  Calendar, 
  MapPin,
  Building2,
  Briefcase,
  GraduationCap,
  ArrowRight
} from "lucide-react";

// --- Data Source ---
const experienceData = [
  {
    id: "infotact",
    role: "Data Associate L1 Intern",
    org: "Infotact Solutions",
    date: "May 2025 — Aug 2025",
    location: "Remote",
    description: "Spearheaded the development of recommendation engines using collaborative filtering algorithms. Led the project team and managed delivery timelines.",
    tags: ["Python", "SVD", "KNN", "Team Leadership"],
  },
  {
    id: "edunet-shell",
    role: "Artificial Intelligence Intern",
    org: "Edunet Foundation (Shell & Microsoft)",
    date: "Mar 2025 — May 2025",
    location: "Remote",
    description: "Engineered CNN models for aerial forest fire detection, optimizing inference time and reducing false positives by 30%.",
    tags: ["TensorFlow", "CNN", "Azure AI", "Computer Vision"],
  },
  {
    id: "edunet-ms",
    role: "Artificial Intelligence Intern",
    org: "Edunet Foundation (Microsoft & SAP)",
    date: "Dec 2024 — Jan 2025",
    location: "Remote",
    description: "Developed deep learning models for agricultural disease detection, processing datasets of over 10,000 images.",
    tags: ["Deep Learning", "Pandas", "Python", "Agricultural AI"],
  },
];

const educationData = [
  {
    id: "btech",
    role: "B.Tech in Computer Science",
    org: "Ganga Institute of Technology",
    date: "Aug 2024 — Jul 2027",
    location: "Jhajjar, Haryana",
    description: "Specializing in Advanced Data Structures, Distributed Systems, and Cloud Computing architectures.",
    tags: ["CGPA: 8.5", "Data Structures", "Algorithms"],
  },
  {
    id: "diploma",
    role: "Diploma in Computer Science",
    org: "Government Polytechnic Adityapur",
    date: "Dec 2021 — Jul 2024",
    location: "Jamshedpur, Jharkhand",
    description: "Foundation in computer science principles, database management, and software engineering.",
    tags: ["Top 5%", "Database Management", "Java"],
  },
];

// --- Animation Variants (Subtle & Professional) ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

export default function Experience() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-teal-500/20">
      <NavHeader />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* --- Header Section --- */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 border-b border-slate-800/50 pb-8"
          >
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-slate-100 mb-2">
                Experience
              </h1>
              <p className="font-sans text-slate-400 max-w-md">
                Professional career trajectory and academic background.
              </p>
            </div>
            
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:border-teal-500/50 transition-all group" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4 group-hover:text-teal-400 transition-colors" /> 
                Resume.pdf
              </a>
            </Button>
          </motion.div>

          {/* --- Professional History --- */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-teal-900/10 rounded border border-teal-900/30 text-teal-500">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif text-slate-100">Professional History</h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              {experienceData.map((item) => (
                <ExperienceCard key={item.id} data={item} type="work" />
              ))}
            </motion.div>
          </section>

          {/* --- Education History --- */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-900/10 rounded border border-purple-900/30 text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif text-slate-100">Education</h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              {educationData.map((item) => (
                <ExperienceCard key={item.id} data={item} type="edu" />
              ))}
            </motion.div>
          </section>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

// --- Premium Interactive Card Component ---
function ExperienceCard({ data, type }: { data: any, type: 'work' | 'edu' }) {
  const accentColor = type === 'work' ? 'group-hover:border-teal-500' : 'group-hover:border-purple-500';
  const titleColor = type === 'work' ? 'group-hover:text-teal-400' : 'group-hover:text-purple-400';

  return (
    <motion.div variants={itemVariants}>
      <Card className={`
        group bg-transparent border-l-2 border-y-0 border-r-0 border-slate-800 rounded-none pl-6 
        ${accentColor} transition-all duration-300 hover:pl-8
      `}>
        <CardHeader className="p-0 mb-3">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div>
              <h3 className={`text-lg font-serif font-bold text-slate-100 ${titleColor} transition-colors flex items-center gap-2`}>
                {data.role}
                {/* Subtle Arrow Indicator on Hover */}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <div className="flex items-center text-sm text-slate-500 font-mono mt-1 group-hover:text-slate-400 transition-colors">
                <Building2 className="w-3 h-3 mr-2" />
                {data.org}
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end text-xs font-mono text-slate-500 gap-1 shrink-0">
              <span className="flex items-center bg-slate-900/50 px-2 py-1 rounded border border-slate-800 group-hover:border-slate-700 transition-colors">
                <Calendar className="w-3 h-3 mr-2" />
                {data.date}
              </span>
              <span className="flex items-center pl-1">
                <MapPin className="w-3 h-3 mr-1" />
                {data.location}
              </span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-2xl group-hover:text-slate-300 transition-colors">
            {data.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag: string) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-[10px] bg-slate-900 text-slate-500 border-slate-800 hover:bg-slate-800 hover:text-white hover:border-slate-600 font-mono font-normal transition-all"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}