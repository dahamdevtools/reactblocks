import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const notificationEmail = await resend.emails.send({
      from: "Contact Form <contact@react-block.dev>",
      to: process.env.YOUR_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    const aiResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "qwen/qwen3-coder:free",
          messages: [
            {
              role: "system",
              content: `You are a friendly and professional customer service representative for ReactBlocks, a React component library. 
Write warm, concise thank-you email bodies for users who submit contact forms. 
The tone should be professional yet personable (2-3 short paragraphs). 
Do NOT include any closing lines such as "Best regards", "Sincerely", or "Warmly" — those will be added manually.`,
            },
            {
              role: "user",
              content: `Write the body of a thank-you email to ${name}, who submitted a contact form with this message:

"${message}"

The email should:
1. Thank them for reaching out.
2. Acknowledge their specific request or feedback.
3. Let them know someone will follow up if needed.
4. Keep a warm, genuine tone.
Do not include a greeting (e.g., "Hi ${name},") or any closing/sign-off — just the main body text.`,
            },
          ],
        }),
      }
    );

    const aiData = await aiResponse.json();
    const aiGeneratedMessage = aiData.choices[0].message.content;

    console.log("AI Response generated:", aiGeneratedMessage);

    const thankYouEmail = await resend.emails.send({
      from: "ReactBlocks Team <noreply@react-block.dev>",
      to: email,
      subject: "Thank you for contacting ReactBlocks!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Hi ${name}!</h2>
          ${aiGeneratedMessage
            .split("\n")
            .map(
              (para) => `<p style="color: #666; line-height: 1.6;">${para}</p>`
            )
            .join("")}
          <p style="color: #666; margin-top: 30px;">
            Best regards,<br/>
            <strong>The ReactBlocks Team</strong>
          </p>
        </div>
      `,
    });

    console.log("Thank you email sent:", thankYouEmail);

    return Response.json(
      {
        success: true,
        message: "Email sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
