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

export default function HomePage() {
  const [expertise, ...otherPillars] = home.pillars;

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
        <div className="shell grid gap-6 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-24">
          <h2 className="display-2 text-ink">{home.standsFor.title}</h2>
          <p className="max-w-[62ch] text-xl leading-relaxed">
            {home.standsFor.body}
          </p>
        </div>
      </section>

      <PhotoBand
        src="/images/container-yard.jpg"
        alt="A supervisor in a safety vest watches a reach stacker working between rows of shipping containers."
      />

      {/* Expertise, value, who we support, why partner */}
      <section className="bg-dock">
        <div className="shell grid gap-5 py-16 lg:grid-cols-2 lg:py-24">
          <article className="on-dark flex flex-col bg-route p-7 text-white sm:p-10 lg:row-span-2">
            <h3 className="display-2">{expertise.title}</h3>
            <p className="mt-5 text-lg text-white/90">{expertise.body}</p>
            <ul className="mt-6 space-y-6">
              {"list" in expertise &&
                expertise.list.map((item) => (
                  <li
                    key={item}
                    className="border-t border-white/30 pt-5 text-lg leading-relaxed text-white/90"
                  >
                    <RichText text={item} />
                  </li>
                ))}
            </ul>
            <LearnMore className="mt-auto pt-10 text-white" />
          </article>

          {otherPillars.map((pillar, index) => {
            const last = index === otherPillars.length - 1;
            return (
              <article
                key={pillar.title}
                className={`flex flex-col bg-white p-7 sm:p-10 ${
                  last ? "lg:col-span-2 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-x-12" : ""
                }`}
              >
                <h3 className="display-3 text-ink">{pillar.title}</h3>
                <div className="flex flex-1 flex-col">
                  <p className={last ? "mt-4 max-w-[70ch] lg:mt-0" : "mt-4"}>{pillar.body}</p>
                  <LearnMore className="mt-auto pt-7 text-signal-deep" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why you should choose us */}
      <section className="on-dark bg-ink text-white">
        <div className="shell py-16 lg:py-24">
          <h2 className="display-2">{home.whyChooseUs.title}</h2>
          <div className="lane mt-7 max-w-md text-signal" />
          <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {home.whyChooseUs.reasons.map((reason) => (
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

      <PracticalSolutions />

      {/* Optimization and efficiency consulting */}
      <section className="bg-white">
        <div className="shell grid gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <h2 className="display-2 text-ink">{home.consulting.title}</h2>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed">
              {home.consulting.body}
            </p>
          </div>
          <ul className="space-y-0 self-start border-b border-ink/15">
            {home.consulting.points.map((point) => (
              <li
                key={point}
                className="flex gap-4 border-t border-ink/15 py-6 text-lg leading-relaxed"
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
    </>
  );
}

function LearnMore({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      <Link
        href="/about-us/"
        className="inline-flex items-center gap-2 font-semibold underline decoration-2 underline-offset-[6px] hover:decoration-[3px]"
      >
        Learn more
        <Icon name="arrow" width={20} height={20} />
      </Link>
    </p>
  );
}
