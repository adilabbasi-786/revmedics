import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Slack webhook URL - in production, use environment variables
    const slackWebhookUrl =
      "https://hooks.slack.com/services/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";

    // Format the message for Slack
    const slackMessage = {
      text: `📩 *New Consultation Booking:*\n\n*Service Type:* ${
        data.serviceType
      }\n*Healthcare Type:* ${data.healthcareType}\n*Full Name:* ${
        data.fullName
      }\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Website:* ${
        data.website || "N/A"
      }\n*Message:* ${data.message}\n*SMS Consent:* ${
        data.smsConsent ? "Yes" : "No"
      }`,
    };

    // Send to Slack
    const slackResponse = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      throw new Error(
        `Slack API responded with status: ${slackResponse.status}`
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending to Slack:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
