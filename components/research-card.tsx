"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ResearchCardProps {
  title: string;
  category: string;
  abstract: string;
  techStack: string[];
  metrics: string;
  link?: string;
}

// Wrap Shadcn Card with Framer Motion
const MotionCard = motion(Card);

export function ResearchCard({ title, category, abstract, techStack, metrics, link }: ResearchCardProps) {
  const content = (
    <MotionCard
      whileHover={{ y: -5 }}
      // Using Shadcn Card classes + custom border overrides
      className="group relative w-full border-t border-x-0 border-b-0 rounded-none border-slate-800 bg-slate-950/50 hover:bg-slate-900/50 hover:border-teal-900/50 transition-colors"
    >
      <CardContent className="p-8">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Left: Title & Context */}
        <div className="md:w-1/4">
          <span className="font-mono text-xs text-teal-500 uppercase tracking-widest">
            {category}
          </span>
          <h3 className="font-serif text-2xl font-bold text-slate-100 mt-2 group-hover:text-teal-400 transition-colors">
            {title}
          </h3>
          <div className="mt-4 font-mono text-sm text-slate-500">
             Result: <span className="text-slate-300 border-b border-slate-700">{metrics}</span>
          </div>
        </div>

        {/* Middle: Abstract */}
        <div className="md:w-2/4">
          <h4 className="font-mono text-xs text-slate-600 uppercase mb-2">Abstract</h4>
          <p className="font-sans text-slate-400 leading-relaxed text-sm md:text-base">
            {abstract}
          </p>
        </div>

        {/* Right: Stack & Action */}
        <div className="md:w-1/4 flex flex-col items-start md:items-end gap-4">
          <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            {techStack.map((tech) => (
              // Using Shadcn Badge 
              <Badge 
                key={tech} 
                variant="outline" 
                className="font-mono text-[10px] border-slate-700 text-slate-400 hover:text-teal-400 hover:border-teal-400"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          {link && (
            <div className="mt-auto flex items-center gap-2 text-sm font-medium text-slate-100 group-hover:text-teal-400 transition-colors">
              View Study <ArrowUpRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
      </CardContent>
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
    </MotionCard>
  );

  return link ? <Link href={link}>{content}</Link> : content;
}
