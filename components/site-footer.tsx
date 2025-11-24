"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { name: "GitHub", href: "https://github.com/krdevanshu06", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/krdevanshu06", icon: Linkedin },
    { name: "Email", href: "mailto:krdevanshu06@gmail.com", icon: Mail },
  ];

  return (
    <footer className="bg-slate-950 py-12 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            {/* NEW: Avatar Section */}
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-12 w-12 border-2 border-teal-500/20">
                <AvatarImage src="https://github.com/krdevanshu06.png" alt="@krdevanshu06" />
                <AvatarFallback className="bg-slate-800 text-teal-400 font-mono">KD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-serif text-xl text-slate-100 leading-none">KrDevanshu06</h3>
                <p className="text-xs text-slate-500 font-mono mt-1">Full Stack & ML Engineer</p>
              </div>
            </div>
            
            <p className="font-sans text-slate-400 max-w-md text-sm leading-relaxed">
              Engineering robust systems and exploring the frontiers of artificial intelligence. 
              Based in Jamshedpur, India.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <div className="flex gap-4">
              {links.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-teal-400 hover:bg-slate-800 transition-all duration-300 border border-slate-800 hover:border-teal-900"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="bg-slate-900 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-600">
          <p>© {currentYear} Devanshu Kumar. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              System Status: Operational
            </span>
            <span>Build v2.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
