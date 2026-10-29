import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PhotoBand } from "@/components/PhotoBand";
import { PracticalSolutions } from "@/components/PracticalSolutions";
import { RichText } from "@/components/RichText";
import { RouteDiagram } from "@/components/RouteDiagram";
import { home } from "@/content/home";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/*
  Five sections, top to bottom: hero, our services, why CNG Synergy,
  about, contact. Kept calm on purpose: text is readable straight away.
  The only scroll effect is the yard photo opening out.
*/
export default function HomePage() {
  const { hero, services, whyUs, about } = home;

  return (
    <>
      {/* 1. Hero */}
      <section className="on-dark overflow-hidden bg-ink text-white">
        <div className="shell pb-12 pt-12 sm:pt-16 lg:pb-16 lg:pt-24">
          <h1 className="hero-title max-w-4xl">{hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:mt-8 sm:text-xl">
            {hero.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <Link href={hero.primary.href} className="btn btn-primary">
              {hero.primary.label}
              <Icon name="arrow" width={20} height={20} />
            </Link>
            <Link href={hero.secondary.href} className="btn btn-outline-light">
              {hero.secondary.label}
            </Link>
          </div>
          <div className="mt-14 lg:mt-20">
            <RouteDiagram labels={hero.flow} description={hero.flowDescription} />
          </div>
        </div>
      </section>

      {/* 2. Our services: four equal cards */}
      <section className="bg-dock">
        <div className="shell py-16 lg:py-24">
          <h2 className="display-2 text-ink">{services.title}</h2>
          <p className="mt-4 max-w-[52ch] text-lg sm:text-xl">{services.intro}</p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {services.items.map((item) => (
              <li key={item.title} className="flex flex-col rounded-lg bg-white p-6 lg:p-7">
                <Icon name={item.icon} width={34} height={34} className="text-route" />
                <h3 className="display-3 mt-4 text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-lg leading-relaxed">{item.body}</p>
                <Link
                  href={item.link.href}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-signal-deep underline decoration-2 underline-offset-[6px] hover:decoration-[3px]"
                >
                  {item.link.label}
                  <span className="sr-only">: {item.title}</span>
                  <Icon name="arrow" width={20} height={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PhotoBand
        opensOnScroll
        src="/images/container-yard.jpg"
        alt="A supervisor in a safety vest watches a reach stacker working between rows of shipping containers."
      />

      {/* 3. Why CNG Synergy */}
      <section className="bg-white">
        <div className="shell py-16 lg:py-24">
          <h2 className="display-2 text-ink">{whyUs.title}</h2>
          <div className="lane mt-7 max-w-md text-signal" />
          <dl className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-3 lg:mt-12">
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

      {/* 4. About: short intro, full story on /about-us/ */}
      <section className="on-dark bg-ink text-white">
        <div className="shell grid gap-6 py-16 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16 lg:py-24">
          <h2 className="display-2">{about.title}</h2>
          <div>
            <p className="max-w-[62ch] text-lg leading-relaxed text-mist sm:text-xl">{about.body}</p>
            <Link href={about.link.href} className="btn btn-outline-light mt-7">
              {about.link.label}
              <Icon name="arrow" width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Contact: office line, WhatsApp and email */}
      <PracticalSolutions showDirect />
    </>
  );
}
