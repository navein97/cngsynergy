import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PhotoBand } from "@/components/PhotoBand";
import { PracticalSolutions } from "@/components/PracticalSolutions";
import { RichText } from "@/components/RichText";
import { RouteDiagram } from "@/components/RouteDiagram";
import { StoreBadges } from "@/components/StoreBadges";
import { home } from "@/content/home";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/*
  Five sections, top to bottom: hero, what we do, ProHayat 180,
  why CNG Synergy, contact. Kept calm on purpose: text is readable
  straight away. The only scroll effect is the yard photo opening out.
*/
export default function HomePage() {
  const { hero, whatWeDo, innovation, whyUs } = home;

  return (
    <>
      {/* 1. Hero */}
      <section className="on-dark overflow-hidden bg-ink text-white">
        <div className="shell pb-12 pt-14 sm:pt-20 lg:pb-16 lg:pt-24">
          <p className="display-3 text-signal">{hero.eyebrow}</p>
          <h1 className="hero-title mt-4 max-w-5xl">{hero.title}</h1>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-xl leading-snug text-mist sm:text-2xl">
              {hero.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={hero.primary.href} className="btn btn-primary">
                {hero.primary.label}
                <Icon name="arrow" width={20} height={20} />
              </Link>
              <Link href={hero.secondary.href} className="btn btn-outline-light">
                {hero.secondary.label}
              </Link>
            </div>
          </div>
          <div className="mt-14 lg:mt-20">
            <RouteDiagram labels={hero.flow} description={hero.flowDescription} />
          </div>
        </div>
      </section>

      <PhotoBand
        opensOnScroll
        src="/images/container-yard.jpg"
        alt="A supervisor in a safety vest watches a reach stacker working between rows of shipping containers."
      />

      {/* 2. What we do: full details are on /our-service/ */}
      <section className="bg-dock">
        <div className="shell py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <div>
              <h2 className="display-2 text-ink">{whatWeDo.title}</h2>
              <p className="mt-4 max-w-[52ch] text-xl">{whatWeDo.intro}</p>
            </div>
            <PageLink href="/our-service/" className="text-signal-deep">
              {whatWeDo.link}
            </PageLink>
          </div>
          <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {whatWeDo.items.map((item) => (
              <li key={item.title} className="border-t border-ink/20 pt-6">
                <Icon name={item.icon} width={34} height={34} className="text-route" />
                <h3 className="display-3 mt-4 text-ink">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Our innovation: ProHayat 180, the full page is /prohayat-180/ */}
      <section className="on-dark bg-ink text-white">
        <div className="shell grid gap-8 py-16 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16 lg:py-24">
          <div>
            <p className="display-3 text-signal">{innovation.eyebrow}</p>
            <p className="display-3 mt-6 text-mist">{innovation.name}</p>
            <h2 className="display-2 mt-2">{innovation.title}</h2>
          </div>
          <div>
            <p className="max-w-[58ch] text-lg leading-relaxed text-mist">{innovation.body}</p>
            <p className="mt-4 text-lg font-semibold">{innovation.live}</p>
            <StoreBadges className="mt-6" />
            <Link href="/prohayat-180/" className="btn btn-outline-light mt-7">
              {innovation.link}
              <Icon name="arrow" width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why CNG Synergy */}
      <section className="bg-white">
        <div className="shell py-16 lg:py-24">
          <h2 className="display-2 text-ink">{whyUs.title}</h2>
          <div className="lane mt-7 max-w-md text-signal" />
          <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {whyUs.reasons.map((reason) => (
              <div key={reason.title} className="border-t border-ink/20 pt-6">
                <dt className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-route text-white">
                    <Icon name={reason.icon} width={26} height={26} />
                  </span>
                  <span className="display-3 text-ink">{reason.title}</span>
                </dt>
                <dd className="mt-4 text-lg leading-relaxed [&_strong]:text-ink">
                  <RichText text={reason.body} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5. Contact: form page, WhatsApp and phone */}
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
