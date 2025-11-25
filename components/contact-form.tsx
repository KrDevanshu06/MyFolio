"use client";

import { useState, useTransition } from "react";
import { sendContactMessage } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2, AlertCircle, CheckCircle2, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type FormState = {
  message: string;
  errors: {
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<FormState>({
    message: "",
    errors: {},
    success: false,
  });

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await sendContactMessage(null, formData);

      const normalizedState: FormState = {
        message: result.message || "",
        errors: result.errors || {},
        success: result.success || false,
      };

      setFormState(normalizedState);

      if (normalizedState.message && !normalizedState.success) {
        toast.error(normalizedState.message);
      } else if (normalizedState.success) {
        toast.success(normalizedState.message);
      }
    });
  };

  if (formState.success) {
    return (
      <div className="h-full min-h-[240px] flex flex-col items-center justify-center p-6 border border-teal-500/20 bg-teal-950/5 rounded-xl text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 bg-teal-900/20 border border-teal-500/30 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
          <CheckCircle2 className="w-7 h-7 text-teal-400" />
        </div>
        <h3 className="text-slate-100 font-serif text-xl mb-2">Signal Received</h3>
        <p className="text-slate-400 font-sans text-sm max-w-xs leading-relaxed mb-6">
          Your transmission has been logged in the system. I will analyze the payload and respond shortly.
        </p>
        <Button
          variant="outline"
          onClick={() => window.location.reload()}
          className="border-slate-700 text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all"
        >
          Initialize New Signal
        </Button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-6 p-1">
      
      {/* Email Input Group */}
      <div className="space-y-2 group">
        <Label 
          htmlFor="email" 
          className="text-xs font-mono text-teal-500/70 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors"
        >
          Source Identity (Email)
        </Label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-teal-500 transition-colors">
            <Mail className="w-4 h-4" />
          </div>
          <Input
            id="email"
            name="email"
            placeholder="engineer@example.com"
            className="pl-10 bg-slate-950/50 border-slate-800 text-slate-100 focus:border-teal-500/50 focus:ring-0 focus:ring-offset-0 focus:bg-slate-900 transition-all h-11 font-sans focus-visible:ring-0 focus-visible:ring-offset-0"
            aria-describedby="email-error"
          />
        </div>
        {formState.errors?.email && (
          <div id="email-error" className="flex items-center text-red-400 text-xs mt-1 font-mono bg-red-950/10 p-2 rounded border border-red-900/20">
            <AlertCircle className="w-3 h-3 mr-2 flex-shrink-0" />
            {formState.errors.email}
          </div>
        )}
      </div>

      {/* Message Input Group */}
      <div className="space-y-2 group">
        <Label 
          htmlFor="message" 
          className="text-xs font-mono text-teal-500/70 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors"
        >
          Transmission Payload (Message)
        </Label>
        <div className="relative">
          <div className="absolute left-3 top-4 text-slate-500 group-focus-within:text-teal-500 transition-colors">
            <MessageSquare className="w-4 h-4" />
          </div>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your technical query or project proposal..."
            className="pl-10 min-h-[140px] bg-slate-950/50 border-slate-800 text-slate-100 focus:border-teal-500/50 focus:ring-0 focus:ring-offset-0 focus:bg-slate-900 transition-all resize-none leading-relaxed focus-visible:ring-0 focus-visible:ring-offset-0"
            aria-describedby="message-error"
          />
        </div>
        {formState.errors?.message && (
          <div id="message-error" className="flex items-center text-red-400 text-xs mt-1 font-mono bg-red-950/10 p-2 rounded border border-red-900/20">
            <AlertCircle className="w-3 h-3 mr-2 flex-shrink-0" />
            {formState.errors.message}
          </div>
        )}
      </div>

      {/* Action Button */}
      <Button
        type="submit"
        disabled={isPending}
        className={cn(
          "w-full h-11 font-mono text-sm tracking-wide transition-all duration-300",
          "bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white shadow-lg shadow-teal-900/20",
          "border border-teal-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
        )}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Encrypting & Transmitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Execute Transmission
          </>
        )}
      </Button>

      {/* Security Footnote */}
      <div className="text-center pt-2">
        <p className="text-[10px] text-slate-600 font-mono">
          SECURE CONNECTION • E2E ENCRYPTED
        </p>
      </div>
    </form>
  );
}
