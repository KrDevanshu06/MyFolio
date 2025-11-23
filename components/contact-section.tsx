"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, Copy } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("your.email@nitjsr.ac.in");
    toast.success("Email encrypted to clipboard.", {
      description: "Ready for transmission.",
      style: {
        background: "#020617",
        border: "1px solid #1e293b",
        color: "#2dd4bf"
      }
    });
  };

  return (
    <section id="contact" className="py-32 px-6 text-center bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-slate-100 mb-8">
          Let&apos;s Build the Future
        </h2>
        <p className="text-slate-400 mb-10 text-lg">
          Currently open for opportunities in Backend Engineering and ML Research.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-teal-600 hover:bg-teal-500 text-white font-sans group"
            onClick={handleCopyEmail}
          >
            <Mail className="mr-2 h-4 w-4 group-hover:hidden" />
            <Copy className="mr-2 h-4 w-4 hidden group-hover:inline" />
            Copy Email Address
          </Button>
          <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:text-white font-mono bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>

      <footer className="mt-32 text-slate-600 font-mono text-xs">
        <p>© 2025. Engineered in Next.js & Tailwind.</p>
      </footer>
    </section>
  );
}
