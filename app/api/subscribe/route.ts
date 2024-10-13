import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

function getRequestParams(email: string) {
  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;

  const DATACENTER = API_KEY.split("-")[1];
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return { url, data, headers };
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || email.length === 0) {
      return NextResponse.json(
        { error: "Forgot to add your email?" },
        { status: 400 }
      );
    }

    const { url, data, headers } = getRequestParams(email);

    await axios.post(url, data, { headers });

    return NextResponse.json({ error: null }, { status: 201 });
  } catch (error: any) {
    const errorMessage = error?.response?.data
      ? error.response.data.title === "Invalid Resource"
        ? error.response.data.detail
        : error.response.data.title
      : "Oops, something went wrong. Try again later";

    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
