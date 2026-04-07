import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: Once SunThru verifies sunthru.co domain in Resend:
//   - Change FROM_EMAIL to "contact@sunthru.co"
//   - Change TO_EMAIL   to "Johncosta@sunthru.co"
const FROM_EMAIL = "onboarding@resend.dev";
const TO_EMAIL = "sadyrbekov.kairat@gmail.com"; // dev recipient (Resend account owner)

export async function POST(req: Request) {
    try {
        const { name, org, persona, message } = await req.json();

        if (!name || !message) {
            return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
        }

        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: `SunThru Inquiry: ${persona} — ${org || "No org"}`,
            html: `
                <div style="font-family: 'JetBrains Mono', monospace; background: #f7f9fc; padding: 40px; max-width: 600px; margin: 0 auto;">
                    <div style="border-left: 4px solid #E8A030; padding-left: 20px; margin-bottom: 32px;">
                        <h1 style="font-family: 'Space Grotesk', sans-serif; color: #000719; margin: 0 0 8px;">New Inquiry Received</h1>
                        <p style="color: #75777e; font-size: 12px; margin: 0; text-transform: uppercase; letter-spacing: 0.2em;">SunThru Partner Inquiry System</p>
                    </div>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #e0e3e6;">
                            <td style="padding: 12px 0; font-size: 11px; color: #75777e; text-transform: uppercase; letter-spacing: 0.15em; width: 35%;">Name</td>
                            <td style="padding: 12px 0; font-size: 14px; color: #000719; font-weight: 600;">${name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e0e3e6;">
                            <td style="padding: 12px 0; font-size: 11px; color: #75777e; text-transform: uppercase; letter-spacing: 0.15em;">Organization</td>
                            <td style="padding: 12px 0; font-size: 14px; color: #000719;">${org || "—"}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e0e3e6;">
                            <td style="padding: 12px 0; font-size: 11px; color: #75777e; text-transform: uppercase; letter-spacing: 0.15em;">Persona</td>
                            <td style="padding: 12px 0; font-size: 14px; color: #E8A030; font-weight: 600;">${persona}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 24px;">
                        <p style="font-size: 11px; color: #75777e; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 12px;">Message</p>
                        <div style="background: #eceef1; padding: 20px; font-size: 14px; color: #191c1e; line-height: 1.7; white-space: pre-wrap;">${message}</div>
                    </div>
                    <p style="margin-top: 32px; font-size: 11px; color: #c5c6ce;">Sent via SunThru Partner Inquiry Form</p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Contact API error:", err);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
