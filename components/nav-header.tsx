"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

export function NavHeader() {
  const navItems = [
    { name: "Research", href: "/#research", isSection: true },
    { name: "Experience", href: "/experience", isSection: false },
    { name: "Archive", href: "/archive", isSection: false },
    { name: "Contact", href: "/#contact", isSection: true },
  ];

  // Custom handler for smooth scrolling
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string, isSection: boolean) => {
    if (!isSection) return; // Let normal navigation work for pages
    
    // Check if we're on homepage and scrolling to section
    if (window.location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: 'smooth',
      });
    }
    // If we're on another page, let the link navigate normally (it will go to homepage with anchor)
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/50"
    >
      <div className="text-xl font-serif font-bold tracking-tight text-slate-100">
        KrDevanshu<span className="text-teal-400">06.</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            onClick={(e) => handleScroll(e, item.href, item.isSection)}
            className="text-sm font-mono text-slate-400 hover:text-teal-400 transition-colors duration-300 uppercase tracking-wider"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation via Sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-teal-400">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-950 border-l-slate-800 w-[300px]">
            <SheetHeader>
              <SheetTitle className="font-serif text-left text-teal-500">Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <SheetClose key={item.name} asChild>
                  <Link 
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href, item.isSection)}
                    className="text-lg font-mono text-slate-400 hover:text-teal-400 transition-colors uppercase tracking-widest"
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
