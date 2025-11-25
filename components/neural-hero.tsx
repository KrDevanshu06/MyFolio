"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { Code2, Terminal, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

// Define roles outside component to prevent re-creation
const roles = ["Intelligence.", "Scale.", "Resilience.", "Future."];

// Separate memoized particle component to prevent re-renders
const ParticleBackground = React.memo(function ParticleBackground({ init }: { init: boolean }) {
  const particleOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 200, links: { opacity: 1 } } },
    },
    particles: {
      color: { value: "#2dd4bf" },
      links: {
        color: "#334155",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: { enable: true, speed: 1 },
      number: { value: 80 },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 z-0">
      {/* @ts-ignore - Types mismatch in library version, functional at runtime */}
      <Particles id="tsparticles" options={particleOptions} />
    </div>
  );
});

export function NeuralHero() {
  const [init, setInit] = useState(false);
  
  // Typewriter State
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Typewriter Logic
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        // Deleting characters
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(50); // Faster deletion
      } else {
        // Typing characters
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        setTypingSpeed(150); // Normal typing speed
      }

      // Logic for switching states
      if (!isDeleting && displayedText === currentRole) {
        // Finished typing, pause before deleting
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && displayedText === "") {
        // Finished deleting, switch to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <ParticleBackground init={init} />

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-mono text-teal-500 mb-4 tracking-widest uppercase text-sm">
            System Status: Online
          </h2>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-slate-100 tracking-tight mb-6">
            I Engineer <br />
            <span className="text-teal-400 border-r-4 border-teal-400 pr-4 animate-pulse">
              {displayedText}
            </span>
          </h1>

          <p className="font-sans text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Building robust systems at the intersection of <b>Artificial Intelligence</b> and <b>Distributed Architectures</b>. 
            Specializing in scalable backend solutions and predictive modeling.
          </p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Using shadcn Badge component with custom classes for glass effect */}
            <Badge variant="outline" className="px-4 py-2 border-slate-800 bg-slate-900/50 backdrop-blur-sm text-slate-300 hover:border-teal-500/50 transition-colors cursor-default">
              <Code2 className="w-4 h-4 mr-2" /> AI & ML
            </Badge>
            <Badge variant="outline" className="px-4 py-2 border-slate-800 bg-slate-900/50 backdrop-blur-sm text-slate-300 hover:border-teal-500/50 transition-colors cursor-default">
              <Cpu className="w-4 h-4 mr-2" /> Data Science
            </Badge>
            <Badge variant="outline" className="px-4 py-2 border-slate-800 bg-slate-900/50 backdrop-blur-sm text-slate-300 hover:border-teal-500/50 transition-colors cursor-default">
              <Terminal className="w-4 h-4 mr-2" /> Backend Systems
            </Badge>
          </motion.div>
        </motion.div>
      </div>
      
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
