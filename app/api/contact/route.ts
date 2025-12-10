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

    // SilentForms access key from environment variable
    const accessKey = process.env.SILENTFORMS_ACCESS_KEY

    if (!accessKey) {
      console.error("[Contact] Missing SilentForms access key")
      return NextResponse.json({ ok: false, error: "Server configuration error" }, { status: 500 })
    }

    // Prepare data for SilentForms
    const silentFormsData = {
      accessKey,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      service: validatedData.service,
      date: validatedData.date || "",
      message: validatedData.message,
    }

    // Submit to SilentForms
    const response = await fetch("https://api.silentforms.com/api/form/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(silentFormsData),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error("[Contact] SilentForms error:", {
        status: response.status,
        statusText: response.statusText,
        result,
      })
      return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500 })
    }

    console.log("[Contact] Form submitted successfully:", {
      timestamp: new Date().toISOString(),
      ...validatedData,
    })

    return NextResponse.json({ ok: true, message: "Message sent successfully" }, { headers: corsHeaders })
  } catch (error) {
    console.error("[Contact] Form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, error: "Invalid form data", details: error.errors }, { status: 400, headers: corsHeaders })
    }

    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500, headers: corsHeaders })
  }
}
