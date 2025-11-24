'use server'

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  email: z.string().email({ message: "Invalid email protocol." }),
  message: z.string().min(10, { message: "Message payload too short (min 10 chars)." }),
})

export async function sendContactMessage(prevState: any, formData: FormData) {
  // 1. Validate Fields
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Transmission Failed: Invalid Data Packets.",
    }
  }

  const { email, message } = validatedFields.data

  try {
    // 2. Send Email & Capture Response
    const { data, error } = await resend.emails.send({
      from: 'Portfolio System <onboarding@resend.dev>',
      // IMPORTANT: In 'onboarding' mode, this MUST be the email you signed up to Resend with.
      to: process.env.MY_EMAIL || 'krdevanshu06@gmail.com', 
      replyTo: email,
      subject: `New Transmission from ${email}`,
      text: `Sender Identity: ${email}\n\nMessage Payload:\n${message}`,
    })

    // 3. Check for Resend API Errors
    if (error) {
      console.error('Resend API Error:', error);
      return {
        success: false,
        message: `Transmission Failed: ${error.message}`,
      }
    }

    return {
      success: true,
      message: "Signal Transmitted Successfully.",
    }

  } catch (error) {
    // This catch block handles network failures (e.g., no internet)
    console.error('Network Error:', error)
    return {
      success: false,
      message: "Network Error: Signal Intercepted.",
    }
  }
}
