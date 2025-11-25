"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Code2,
  Cpu,
  Download,
  Mail,
  LayoutTemplate,
  Terminal,
  Github,
  Linkedin,
  Laptop,
  Award
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Command Menu Toggle - Ctrl/Cmd + K
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
        return;
      }
      
      // Don't trigger shortcuts when typing in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      // GitHub Protocol - Shift + G
      if (e.key === "G" && e.shiftKey && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        window.open("https://github.com/krdevanshu06", "_blank");
        return;
      }
      
      // LinkedIn Handshake - Shift + L
      if (e.key === "L" && e.shiftKey && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        window.open("https://linkedin.com/in/krdevanshu06", "_blank");
        return;
      }
      
      // Export Resume - Shift + P
      if (e.key === "P" && e.shiftKey && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        window.open('/resume.pdf', '_blank');
        return;
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {/* This component doesn't render a trigger button itself; 
          it listens for the shortcut or can be triggered via state from NavHeader */}
      <div className="hidden md:block fixed bottom-4 right-4 z-50">
         <div className="bg-slate-900/80 backdrop-blur border border-slate-800 text-slate-500 px-3 py-1.5 rounded-md text-xs font-mono shadow-lg">
            Press <span className="text-teal-500">⌘K</span> to execute
         </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Input command sequence..." className="font-mono" />
        <CommandList className="bg-slate-950 border-slate-800">
          <CommandEmpty>No directives found.</CommandEmpty>
          
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => router.push("/#research"))}>
              <Cpu className="mr-2 h-4 w-4" />
              <span>Research Modules</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#projects"))}>
              <Code2 className="mr-2 h-4 w-4" />
              <span>Engineering Logs</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/archive"))}>
              <Award className="mr-2 h-4 w-4" />
              <span>Certificate Archive</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#contact"))}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Transmit Signal</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator className="bg-slate-800" />

          <CommandGroup heading="System Actions">
            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/krdevanshu06", "_blank"))}>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub Protocol</span>
              <CommandShortcut>⇧G</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com/in/krdevanshu06", "_blank"))}>
              <Linkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn Handshake</span>
              <CommandShortcut>⇧L</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open('/resume.pdf', '_blank'))}>
              <Download className="mr-2 h-4 w-4" />
              <span>Export Resume Data</span>
              <CommandShortcut>⇧P</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
