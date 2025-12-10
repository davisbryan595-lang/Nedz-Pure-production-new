import { NextResponse } from "next/server"

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

    const accessKey = process.env.SILENTFORMS_ACCESS_KEY

    // Prepare data for SilentForms with access key
    const silentFormsData = {
      accessKey,
      ...body,
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

    if (result.status === "success") {
      console.log("[Contact] Form submitted successfully")
      return NextResponse.json({ status: "success", message: "Message sent successfully" }, { headers: corsHeaders })
    } else {
      console.error("[Contact] SilentForms error:", result)
      return NextResponse.json({ status: "error", message: result.message || "Failed to send message" }, { status: 400, headers: corsHeaders })
    }
  } catch (error) {
    console.error("[Contact] Form error:", error)
    return NextResponse.json({ status: "error", message: "Failed to send message" }, { status: 500, headers: corsHeaders })
  }
}
