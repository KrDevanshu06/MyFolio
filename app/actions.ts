'use server'

import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  email: z.string().email({ message: "Invalid email protocol." }),
  message: z.string().min(10, { message: "Message payload too short (min 10 chars)." }),
})

export async function sendContactMessage(prevState: any, formData: FormData) {
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
    // Send the email via Resend
    await resend.emails.send({
      // Use 'onboarding@resend.dev' for testing if you don't have a custom domain yet
      from: 'Portfolio System <onboarding@resend.dev>',
      to: process.env.MY_EMAIL || 'krdevanshu06@gmail.com',
      replyTo: email,
      subject: `New Transmission from ${email}`,
      text: `Sender Identity: ${email}\n\nMessage Payload:\n${message}`,
      // You can also send HTML:
      // html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`
    })

    return {
      success: true,
      message: "Signal Transmitted Successfully.",
    }
  } catch (error) {
    console.error('Email sending failed:', error)
    return {
      success: false,
      message: "Network Error: Signal Intercepted.",
    }
  }
}
