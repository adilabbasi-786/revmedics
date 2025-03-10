import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Store the form data in the logs at minimum
    console.log("Form submission received:", JSON.stringify(data, null, 2));

    // Check if Slack webhook URL is available
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!slackWebhookUrl) {
      console.log("No Slack webhook URL configured, using fallback method");
      // Return success anyway - we've logged the data
      return NextResponse.json({
        success: true,
        message: "Your request has been received. We'll contact you soon.",
      });
    }

    try {
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

      // Try to send to Slack
      console.log("Attempting to send to Slack webhook...");
      const slackResponse = await fetch(slackWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(slackMessage),
      });

      // Get response details
      let responseText;
      try {
        responseText = await slackResponse.text();
      } catch (textError) {
        responseText = "Could not read response text";
      }

      console.log(
        `Slack API response: ${slackResponse.status} - ${responseText}`
      );

      // If Slack fails, we still want to capture the form data
      if (!slackResponse.ok) {
        console.log("Slack webhook failed, but form data was captured in logs");

        // If it's a 404 no_service error, the webhook is invalid
        if (
          slackResponse.status === 404 &&
          responseText.includes("no_service")
        ) {
          console.error(
            "The Slack webhook URL is invalid or has been deactivated"
          );
        }

        // Return success anyway - we've logged the data
        return NextResponse.json({
          success: true,
          message: "Your request has been received. We'll contact you soon.",
        });
      }

      return NextResponse.json({ success: true });
    } catch (fetchError) {
      console.error("Error sending to Slack:", fetchError);

      // Return success anyway - we've logged the data
      return NextResponse.json({
        success: true,
        message: "Your request has been received. We'll contact you soon.",
      });
    }
  } catch (parseError) {
    console.error("Request parsing error:", parseError);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to parse request data",
        details: parseError.message,
      },
      { status: 400 }
    );
  }
}
