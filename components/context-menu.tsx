"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { 
  Code2, 
  Copy, 
  Terminal, 
  RefreshCw, 
  Eye,
  Github,
  Link as LinkIcon,
  FileText // Icon for text selection
} from "lucide-react";
import { toast } from "sonner"; // Import toast for feedback

export function ContextMenu() {
  const [show, setShow] = useState(false);
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const handleContextMenu = useCallback((event: MouseEvent) => {
    event.preventDefault();
    // FIX: Use clientX/Y (viewport coordinates) instead of pageX/Y (document coordinates)
    // to ensure the menu stays visible regardless of scroll position.
    setAnchorPoint({ x: event.clientX, y: event.clientY });
    setShow(true);
  }, []);

  const handleClick = useCallback(() => {
    if (show) setShow(false);
  }, [show]);

  // Handle escape key
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleContextMenu, handleClick, handleKeyDown]);
  
  const getMenuPosition = () => {
    if (typeof window === "undefined") {
      return anchorPoint;
    }

    const menuWidth = 192; // w-48
    const menuHeight = 280; // Height of the menu items stack
    
    let x = anchorPoint.x;
    let y = anchorPoint.y;

    // Flip horizontally if close to right edge
    if (x + menuWidth > window.innerWidth) {
      x = anchorPoint.x - menuWidth;
    }
    // Flip vertically if close to bottom edge
    if (y + menuHeight > window.innerHeight) {
      y = anchorPoint.y - menuHeight;
    }

    return { x, y };
  };

  const { x, y } = getMenuPosition();

  // Menu item handlers
  const handleCopySelection = () => {
    const selection = window.getSelection()?.toString();
    
    if (selection && selection.length > 0) {
      navigator.clipboard.writeText(selection);
      toast.success("Text Data Extracted", {
        description: "Selection copied to clipboard buffer.",
        style: {
          background: "#020617",
          border: "1px solid #1e293b",
          color: "#2dd4bf"
        }
      });
    } else {
      toast.error("Extraction Failed", {
        description: "No text data selected.",
        style: {
          background: "#020617",
          border: "1px solid #7f1d1d",
          color: "#f87171"
        }
      });
    }
    setShow(false);
  };

  const handleMenuItemClick = (action: () => void) => {
    action();
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          // FIX: Increased z-index to 9999 to sit above NavHeader (z-50) and Toasts
          className="fixed z-[9999] w-48 rounded-lg border border-slate-800 bg-slate-950/95 backdrop-blur-xl p-1 shadow-2xl ring-1 ring-teal-500/20"
          style={{ top: y, left: x }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-2 py-1.5 text-xs font-mono text-teal-500/50 border-b border-slate-800 mb-1 select-none">
            SYSTEM_ACTIONS
          </div>

          <MenuItem 
            icon={Eye} 
            label="View Source" 
            shortcut="⌘U" 
            onClick={() => handleMenuItemClick(() => window.open("https://github.com/krdevanshu06/myfolio", "_blank"))} 
          />
          
          {/* New Copy Selection Item */}
          <MenuItem 
            icon={FileText} 
            label="Copy Selection" 
            shortcut="⌘S" 
            onClick={handleCopySelection} 
          />

          <MenuItem 
            icon={LinkIcon} 
            label="Copy URL" 
            shortcut="⌘L" 
            onClick={() => handleMenuItemClick(() => {
              navigator.clipboard.writeText(window.location.href);
              toast.success("URL Copied", {
                style: { background: "#020617", color: "#2dd4bf", border: "1px solid #1e293b" }
              });
            })}
          />
          
          <MenuItem 
            icon={Github} 
            label="Git Clone" 
            onClick={() => handleMenuItemClick(() => {
              navigator.clipboard.writeText("git clone https://github.com/krdevanshu06/myfolio.git");
              toast.success("Repo URL Copied", {
                style: { background: "#020617", color: "#2dd4bf", border: "1px solid #1e293b" }
              });
            })}
          />
          
          <div className="my-1 h-px bg-slate-800" />
          
          <MenuItem icon={RefreshCw} label="Reload Matrix" onClick={() => handleMenuItemClick(() => window.location.reload())} />
          <MenuItem 
            icon={Terminal} 
            label="System Status" 
            status="99.9%" 
            className="pointer-events-none opacity-70"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Helper Component for Menu Items
function MenuItem({ 
  icon: Icon, 
  label, 
  shortcut, 
  status, 
  onClick, 
  className 
}: any) {
  return (
    <div
      onClick={onClick}
      className={`group flex cursor-pointer items-center justify-between rounded-md px-2 py-1.5 text-xs text-slate-300 hover:bg-teal-500/10 hover:text-teal-400 transition-colors ${className}`}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-3.5 w-3.5" />}
        <span className="font-mono">{label}</span>
      </div>
      {shortcut && <span className="text-slate-600 group-hover:text-teal-500/70">{shortcut}</span>}
      {status && (
        <span className="flex items-center gap-1 rounded bg-emerald-500/10 px-1 py-0.5 text-[10px] text-emerald-500">
          <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
          {status}
        </span>
      )}
    </div>
  );
}
