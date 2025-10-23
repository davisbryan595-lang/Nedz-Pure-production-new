import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  date: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    console.log("[v0] CONTACT_SUBMISSION:", {
      timestamp: new Date().toISOString(),
      recipient: "nedzpur@gmail.com",
      ...validatedData,
    })

    // In production, integrate with email service:
    // - Mailgun: https://www.mailgun.com/
    // - SendGrid: https://sendgrid.com/
    // - Resend: https://resend.com/
    // - Gmail API: https://developers.google.com/gmail/api

    // Example with Resend (recommended):
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@nedzpur.com',
    //   to: 'nedzpur@gmail.com',
    //   subject: `New Contact Form Submission from ${validatedData.name}`,
    //   html: `<p>Name: ${validatedData.name}</p>...`
    // });

    return NextResponse.json({ ok: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("[v0] Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, error: "Invalid form data", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500 })
  }
}
