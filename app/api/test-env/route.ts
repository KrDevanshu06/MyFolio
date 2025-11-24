import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    resendApiKeyExists: !!process.env.RESEND_API_KEY,
    resendApiKeyLength: process.env.RESEND_API_KEY?.length || 0,
    myEmail: process.env.MY_EMAIL,
    nodeEnv: process.env.NODE_ENV,
  })
}
