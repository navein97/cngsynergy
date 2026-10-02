"use server";

import { site } from "@/content/site";

export type ContactState = {
  status: "idle" | "sent" | "error";
  /** Shown to the visitor when status is "error". */
  message?: string;
  /** What the visitor typed, so the form is not wiped on an error. */
  values?: { firstName: string; lastName: string; phone: string; message: string };
};

const UNAVAILABLE =
  "Your message could not be sent. Please call, WhatsApp or email us instead.";

function read(formData: FormData, key: string, maxLength: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

/**
 * Emails a contact form submission to the company inbox using Resend.
 *
 * Environment variables (set these in Vercel, see .env.example):
 *   RESEND_API_KEY      required
 *   CONTACT_TO_EMAIL    optional, defaults to the address in content/site.ts
 *   CONTACT_FROM_EMAIL  optional, must be on a domain verified in Resend
 */
export async function sendMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    firstName: read(formData, "firstName", 80),
    lastName: read(formData, "lastName", 80),
    phone: read(formData, "phone", 40),
    message: read(formData, "message", 4000),
  };

  // Hidden field that people never see. Bots fill it in, so drop those quietly.
  if (read(formData, "company", 200)) {
    return { status: "sent" };
  }

  if (!values.firstName || !values.phone || !values.message) {
    return {
      status: "error",
      message: "Add your first name, phone number and a message, then send again.",
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return { status: "error", message: UNAVAILABLE, values };
  }

  const name = [values.firstName, values.lastName].filter(Boolean).join(" ");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ??
          "CNG Synergy Website <website@contact.cngsynergy.com>",
        to: [process.env.CONTACT_TO_EMAIL ?? site.email],
        subject: `Website enquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Phone: ${values.phone}`,
          "",
          values.message,
          "",
          "Sent from the contact form on cngsynergy.com",
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Contact form: Resend replied", response.status, await response.text());
      return { status: "error", message: UNAVAILABLE, values };
    }
  } catch (error) {
    console.error("Contact form: request to Resend failed", error);
    return { status: "error", message: UNAVAILABLE, values };
  }

  return { status: "sent" };
}
