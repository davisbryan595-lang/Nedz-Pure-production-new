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

    const accessKey = "32a21268-2ed0-4e2e-83b1-5123ffcc47e1"

    // Prepare URLSearchParams for Web3Forms
    const params = new URLSearchParams()
    params.append("access_key", accessKey)

    // Append all form fields
    Object.entries(body).forEach(([key, value]) => {
      params.append(key, String(value))
    })

    // Submit to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })

    const result = await response.json()

    if (result.success) {
      console.log("[Contact] Form submitted successfully to Web3Forms")
      return NextResponse.json({ status: "success", message: "Message sent successfully" }, { headers: corsHeaders })
    } else {
      console.error("[Contact] Web3Forms error:", result)
      return NextResponse.json({ status: "error", message: result.message || "Failed to send message" }, { status: 400, headers: corsHeaders })
    }
  } catch (error) {
    console.error("[Contact] Form error:", error)
    return NextResponse.json({ status: "error", message: "Failed to send message" }, { status: 500, headers: corsHeaders })
  }
}
