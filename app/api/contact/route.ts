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

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    // Log submission (simulate email send)
    console.log("[v0] CONTACT_SUBMISSION:", {
      timestamp: new Date().toISOString(),
      ...validatedData,
    })

    // In production, you would integrate with an email service here:
    // - Mailgun: https://www.mailgun.com/
    // - SendGrid: https://sendgrid.com/
    // - Resend: https://resend.com/

    // Example with environment variables:
    // const apiKey = process.env.MAILGUN_API_KEY
    // const domain = process.env.MAILGUN_DOMAIN

    return NextResponse.json({ ok: true, message: "Message sent successfully" }, { headers: corsHeaders })
  } catch (error) {
    console.error("[v0] Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, error: "Invalid form data", details: error.errors }, { status: 400, headers: corsHeaders })
    }

    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500, headers: corsHeaders })
  }
}
