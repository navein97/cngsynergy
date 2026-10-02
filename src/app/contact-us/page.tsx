import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { contact } from "@/content/contact";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: contact.title,
  description: contact.body,
  alternates: { canonical: "/contact-us/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title={contact.title} />

      <section className="bg-dock">
        <dl className="shell grid gap-8 py-12 sm:grid-cols-3 lg:py-16">
          <div className="flex gap-4">
            <Icon name="phone" width={30} height={30} className="mt-1 shrink-0 text-signal" />
            <div>
              <dt className="display-3 text-ink">Phone Number</dt>
              <dd className="mt-1.5 text-lg">
                <a href={site.phone.href} className="underline-offset-4 hover:underline">
                  {site.phone.display}
                </a>
              </dd>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon name="mail" width={30} height={30} className="mt-1 shrink-0 text-signal" />
            <div className="min-w-0">
              <dt className="display-3 text-ink">E-Mail</dt>
              <dd className="mt-1.5 break-words text-lg">
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon name="pin" width={30} height={30} className="mt-1 shrink-0 text-signal" />
            <div>
              <dt className="display-3 text-ink">Address</dt>
              <dd className="mt-1.5 text-lg">
                <address className="not-italic">{site.address.join(" ")}</address>
              </dd>
            </div>
          </div>
        </dl>
      </section>

      <section className="bg-white">
        <div className="shell grid gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <h2 className="display-2 text-ink">{contact.heading}</h2>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed">{contact.body}</p>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp mt-8"
            >
              <WhatsAppIcon />
              {contact.whatsappLabel}
            </a>
          </div>
          <ContactForm />
        </div>
      </section>

      <section aria-label="Map">
        <iframe
          src={site.mapEmbedUrl}
          title="Map showing Pusat Perniagaan Prima Klang, Jalan Kota 2/KS 1, 41000 Klang, Selangor"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[26rem] w-full border-0"
        />
      </section>
    </>
  );
}
