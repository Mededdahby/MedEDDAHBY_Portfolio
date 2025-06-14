import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  // Get the authorization code from the URL query parameters
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")

  if (!code) {
    return NextResponse.json({ error: "No authorization code provided" }, { status: 400 })
  }

  try {
    // Exchange the authorization code for tokens
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID || "",
        client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
        redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/google-auth-callback`,
        grant_type: "authorization_code",
      }),
    })

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json()
      throw new Error(`Failed to exchange code: ${JSON.stringify(errorData)}`)
    }

    const tokenData = await tokenResponse.json()

    // Redirect back to the contacts page with the tokens
    // In a real app, you'd want to store these securely (e.g., in a session or encrypted cookie)
    return NextResponse.redirect(new URL("/contacts?auth=success", request.url))
  } catch (error) {
    console.error("Error during Google OAuth flow:", error)
    return NextResponse.redirect(new URL("/contacts?auth=error", request.url))
  }
}
