"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "@/app/contact-us/actions";
import { contact } from "@/content/contact";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "mt-2 block w-full rounded-[3px] border border-ink/30 bg-white px-4 py-3 text-ink placeholder:text-slate/60 focus:border-route";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);
  const { form } = contact;

  if (state.status === "sent") {
    return (
      <p
        role="status"
        className="border-l-4 border-pd-green bg-pd-green-soft px-6 py-5 text-lg font-medium text-ink"
      >
        {form.sent}
      </p>
    );
  }

  return (
    <form action={formAction} className="grid gap-5 sm:grid-cols-2">
      <label className="block font-semibold text-ink">
        {form.firstName.label}
        <input
          type="text"
          name="firstName"
          required
          maxLength={80}
          autoComplete="given-name"
          placeholder={form.firstName.placeholder}
          defaultValue={state.values?.firstName}
          className={fieldClass}
        />
      </label>
      <label className="block font-semibold text-ink">
        {form.lastName.label}
        <input
          type="text"
          name="lastName"
          maxLength={80}
          autoComplete="family-name"
          placeholder={form.lastName.placeholder}
          defaultValue={state.values?.lastName}
          className={fieldClass}
        />
      </label>
      <label className="block font-semibold text-ink sm:col-span-2">
        {form.phone.label}
        <input
          type="tel"
          name="phone"
          required
          maxLength={40}
          autoComplete="tel"
          placeholder={form.phone.placeholder}
          defaultValue={state.values?.phone}
          className={fieldClass}
        />
      </label>
      <label className="block font-semibold text-ink sm:col-span-2">
        {form.message.label}
        <textarea
          name="message"
          required
          rows={5}
          maxLength={4000}
          placeholder={form.message.placeholder}
          defaultValue={state.values?.message}
          className={fieldClass}
        />
      </label>

      {/* Hidden from people; catches bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2">
        {state.status === "error" && (
          <p role="alert" className="mb-4 border-l-4 border-signal-deep bg-signal/8 px-5 py-4 font-medium text-ink">
            {state.message}
          </p>
        )}
        <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-60">
          {pending ? form.sending : form.submit}
        </button>
      </div>
    </form>
  );
}
