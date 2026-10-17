import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PhotoBand } from "@/components/PhotoBand";
import { Pillars } from "@/components/Pillars";
import { PracticalSolutions } from "@/components/PracticalSolutions";
import { RichText } from "@/components/RichText";
import { RouteDiagram } from "@/components/RouteDiagram";
import { home } from "@/content/home";
import { prohayat } from "@/content/prohayat";
import { services } from "@/content/services";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/*
  The home page reads as one journey, top to bottom:
  hero, what we stand for, the yard, the four pillars, why choose us,
  consulting, then short previews of Services and ProHayat 180, and contact.
  Kept calm on purpose: text is readable straight away, no scroll tricks.
  The only scroll effect left is the yard photo opening out.
*/
export default function HomePage() {
  const { reasons } = home.whyChooseUs;
  const { points } = home.consulting;

  return (
    <>
      {/* Hero */}
      <section className="on-dark overflow-hidden bg-ink text-white">
        <div className="shell pb-12 pt-14 sm:pt-20 lg:pb-16 lg:pt-24">
          <h1 className="display-1">{home.hero.title}</h1>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-xl leading-snug text-mist sm:text-2xl">
              {home.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us/" className="btn btn-primary">
                Contact us
                <Icon name="arrow" width={20} height={20} />
              </Link>
              <Link href="/our-service/" className="btn btn-outline-light">
                Our services
              </Link>
            </div>
          </div>
          <div className="mt-14 lg:mt-20">
            <RouteDiagram
              labels={home.hero.flow}
              description={home.hero.flowDescription}
            />
          </div>
        </div>
      </section>

      {/* What CNGSYNERGY stands for */}
      <section className="bg-white">
        <div className="shell grid gap-6 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-28">
          <h2 className="display-2 text-ink">{home.standsFor.title}</h2>
          <p className="max-w-[62ch] text-xl leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">
            {home.standsFor.body}
          </p>
        </div>
      </section>

      <PhotoBand
        opensOnScroll
        src="/images/container-yard.jpg"
        alt="A supervisor in a safety vest watches a reach stacker working between rows of shipping containers."
      />

      {/* Expertise, value, who we support, why partner */}
      <Pillars pillars={home.pillars} labels={home.route} />

      {/* Why you should choose us */}
      <section className="on-dark bg-ink text-white">
        <div className="shell py-16 lg:py-24">
          <h2 className="display-2">{home.whyChooseUs.title}</h2>
          <div className="lane mt-7 max-w-md text-signal" />
          <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason.title} className="border-t border-white/20 pt-6">
                  <dt className="display-3">{reason.title}</dt>
                  <dd className="mt-3 text-mist [&_strong]:text-white">
                    <RichText text={reason.body} />
                  </dd>
                </div>
              ))}
            </dl>
        </div>
      </section>

      {/* Optimization and efficiency consulting */}
      <section className="bg-white">
        <div className="shell grid gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="self-start lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
            <h2 className="display-2 text-ink">{home.consulting.title}</h2>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed">
              {home.consulting.body}
            </p>
          </div>
          <ul className="border-b border-ink/15">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex gap-4 border-t border-ink/15 py-6 text-lg leading-relaxed lg:py-9"
                >
                  <Icon
                    name="check"
                    className="mt-1 shrink-0 text-signal"
                    strokeWidth={2.5}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
        </div>
      </section>

      {/* Services preview: full details are on /our-service/ */}
      <section className="bg-dock">
        <div className="shell py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <h2 className="display-2 text-ink">{services.title}</h2>
            <PageLink href="/our-service/" className="text-signal-deep">
              {home.servicesPreview.link}
            </PageLink>
          </div>
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {services.items.map((service) => (
                <li key={service.title} className="border-t border-ink/20 pt-6">
                  <Icon name={service.icon} width={34} height={34} className="text-route" />
                  <h3 className="display-3 mt-4 text-ink">{service.title}</h3>
                  <p className="mt-3">{service.summary}</p>
                </li>
              ))}
            </ul>
        </div>
      </section>

      {/* ProHayat 180 preview: the full page is /prohayat-180/ */}
      <section className="on-dark bg-ink text-white">
        <div className="shell grid gap-8 py-16 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16 lg:py-24">
          <div>
            <p className="display-3 text-mist">{home.prohayatPreview.name}</p>
            <h2 className="display-2 mt-3">{prohayat.hero.title}</h2>
          </div>
          <div>
            <p className="max-w-[58ch] text-lg leading-relaxed text-mist">{prohayat.hero.body}</p>
            <Link href="/prohayat-180/" className="btn btn-outline-light mt-7">
              {home.prohayatPreview.link}
              <Icon name="arrow" width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact: form page, WhatsApp and phone */}
      <PracticalSolutions showDirect />
    </>
  );
}

function PageLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-semibold underline decoration-2 underline-offset-[6px] hover:decoration-[3px] ${className}`}
    >
      {children}
      <Icon name="arrow" width={20} height={20} />
    </Link>
  );
}
