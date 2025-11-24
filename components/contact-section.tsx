"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ContactForm } from "@/components/contact-form"; // Import the form

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-slate-950 relative overflow-hidden scroll-mt-28">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Resume */}
          <div className="text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-100 mb-6">
              Let&apos;s Build the Future
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Currently open for opportunities in Backend Engineering and ML Research. 
              Whether you have a question or just want to say hi, my inbox is open.
            </p>
            
            <div className="flex justify-center md:justify-start">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-700 text-slate-300 hover:text-white font-mono bg-transparent w-full md:w-auto"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download System Logs (Resume)
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl shadow-2xl">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
