"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function NavHeader() {
  const navItems = [
    { name: "Research", href: "#research" },
    { name: "Engineering", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/50"
    >
      <div className="text-xl font-serif font-bold tracking-tight text-slate-100">
        <span className="text-teal-400">01.</span> Portfolio
      </div>

      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="text-sm font-mono text-slate-400 hover:text-teal-400 transition-colors duration-300 uppercase tracking-wider"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
