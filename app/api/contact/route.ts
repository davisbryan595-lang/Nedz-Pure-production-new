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

    // SilentForms access key
    const accessKey = "b65daedb4eaabc597eb293f707e7aa5d6b3be0a1c56c58ec25c7802c9da92990"

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
      console.error("[Contact] SilentForms error:", result)
      return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: response.status })
    }

    console.log("[Contact] Form submitted successfully:", {
      timestamp: new Date().toISOString(),
      ...validatedData,
    })

    return NextResponse.json({ ok: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("[Contact] Form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, error: "Invalid form data", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500 })
  }
}
