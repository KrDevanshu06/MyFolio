"use client"

import { useState, useTransition } from "react"
import { sendContactMessage } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Loader2, AlertCircle, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

type FormState = {
  message: string
  errors: {
    email?: string[]
    message?: string[]
  }
  success: boolean
}

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<FormState>({
    message: "",
    errors: {},
    success: false,
  })

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await sendContactMessage(null, formData)
      
      // Normalize the result to match our FormState type
      const normalizedState: FormState = {
        message: result.message || "",
        errors: result.errors || {},
        success: result.success || false,
      }
      
      setFormState(normalizedState)
      
      if (normalizedState.message && !normalizedState.success) {
        toast.error(normalizedState.message)
      } else if (normalizedState.success) {
        toast.success(normalizedState.message)
      }
    })
  }

  if (formState.success) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border border-teal-900/50 bg-teal-950/10 rounded-lg text-center">
        <div className="w-12 h-12 bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6 text-teal-400" />
        </div>
        <h3 className="text-slate-100 font-serif text-xl mb-2">Transmission Received</h3>
        <p className="text-slate-400 font-sans text-sm">
          Your message has been logged in the system. I will respond shortly.
        </p>
        <Button 
          variant="link" 
          onClick={() => window.location.reload()} 
          className="text-teal-400 mt-4"
        >
          Send Another
        </Button>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6 text-left">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-400 font-mono text-xs uppercase">
          Source Identity (Email)
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="user@domain.com"
          className="bg-slate-900 border-slate-800 text-slate-100 focus:border-teal-500 focus:ring-teal-500/20"
          aria-describedby="email-error"
        />
        {formState.errors?.email && (
          <p id="email-error" className="text-red-400 text-xs flex items-center mt-1 font-mono">
            <AlertCircle className="w-3 h-3 mr-1" />
            {formState.errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-slate-400 font-mono text-xs uppercase">
          Payload (Message)
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Initiating handshake protocol..."
          className="min-h-[120px] bg-slate-900 border-slate-800 text-slate-100 focus:border-teal-500 focus:ring-teal-500/20 resize-none"
          aria-describedby="message-error"
        />
        {formState.errors?.message && (
          <p id="message-error" className="text-red-400 text-xs flex items-center mt-1 font-mono">
            <AlertCircle className="w-3 h-3 mr-1" />
            {formState.errors.message}
          </p>
        )}
      </div>

      <Button 
        type="submit" 
        disabled={isPending}
        className="w-full bg-teal-600 hover:bg-teal-500 text-white font-mono"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Encrypting & Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Transmit Message
          </>
        )}
      </Button>
    </form>
  )
}
