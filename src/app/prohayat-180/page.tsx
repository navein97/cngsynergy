import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Badge, ProHayatDemo } from "@/components/ProHayatDemo";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StoreBadges } from "@/components/StoreBadges";
import { TrailerBand } from "@/components/TrailerBand";
import { prohayat } from "@/content/prohayat";

export const metadata: Metadata = {
  title: { absolute: prohayat.metaTitle },
  description: prohayat.metaDescription,
  alternates: { canonical: "/prohayat-180/" },
};

export default function ProHayatPage() {
  const { hero, habit, getStarted, closing, trailer, setupGuide } = prohayat;
  const days = Array.from({ length: habit.days }, (_, index) => index);
  const daysStyle = { "--n": habit.days } as CSSProperties;

  return (
    <div className="bg-pd-surface text-pd-navy">
      {/* Hero */}
      <header className="on-dark bg-pd-navy text-white">
        <div className="shell pb-20 pt-12 sm:pt-16 lg:pb-24">
          <Badge>{hero.badge}</Badge>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
            <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.95]">
              <span className="text-pd-orange">
                ProHayat<sup className="text-[0.45em]">™</sup> 180
              </span>{" "}
              {hero.title}
            </h1>
            <div>
              <p className="text-xl font-medium leading-snug sm:text-2xl">{hero.sub}</p>
              <p className="mt-4 text-lg text-white/75">{hero.body}</p>
              <a href={getStarted.href} className="btn mt-6 bg-pd-orange text-pd-navy hover:bg-white">
                {getStarted.label}
              </a>
              <StoreBadges className="mt-5" />
            </div>
          </div>

          {/* 30 days, side by side: one-off training fades, the daily habit stays */}
          <ScrollProgress from={0.72} to={0.3} className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-10 lg:mt-16">
            <div>
              <div className="days days-fade text-white" style={daysStyle} aria-hidden="true">
                {days.map((day) => (
                  <span key={day} style={{ "--i": day } as CSSProperties} />
                ))}
              </div>
              <p className="mt-3 font-semibold text-white/75">{habit.fading}</p>
            </div>
            <div>
              <div className="days days-keep text-pd-orange" style={daysStyle} aria-hidden="true">
                {days.map((day) => (
                  <span key={day} style={{ "--i": day } as CSSProperties} />
                ))}
              </div>
              <p className="mt-3 font-semibold">{habit.lasting}</p>
            </div>
          </ScrollProgress>
        </div>
      </header>

      {/* Trailer: muted loop, the button plays it with sound, full screen */}
      <TrailerBand title={trailer.title} label={trailer.label} src={trailer.src} poster={trailer.poster} />

      {/* Vehicle buttons, the phone scenario and the manager dashboard */}
      <ProHayatDemo />

      {/* Setup guide: steps beside the video in a phone frame */}
      <section className="bg-white">
        <div className="shell grid gap-12 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20 lg:py-24">
          <div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-none">
              {setupGuide.heading}
            </h2>
            <p className="mt-5 max-w-xl text-xl">{setupGuide.body}</p>
            <ol className="mt-8 max-w-xl space-y-4 text-lg">
              {setupGuide.steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-pd-navy font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <a href={getStarted.href} className="btn mt-9 bg-pd-orange text-pd-navy hover:bg-pd-navy hover:text-white">
              {getStarted.label}
            </a>
          </div>
          <div className="mx-auto w-[min(320px,80vw)] rounded-[48px] bg-pd-navy p-3 shadow-2xl">
            <video
              src={setupGuide.src}
              poster={setupGuide.poster}
              controls
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              playsInline
              preload="none"
              aria-label={setupGuide.videoTitle}
              className="aspect-[9/16] w-full rounded-[38px] bg-black object-cover"
            />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="on-dark bg-pd-navy text-white">
        <div className="shell flex flex-col gap-10 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none">
            {closing.headline[0]}
            <br />
            <span className="text-pd-orange">{closing.headline[1]}</span>
          </h2>
          <div className="max-w-md">
            <a href={getStarted.href} className="btn bg-pd-orange text-pd-navy hover:bg-white">
              {getStarted.label}
            </a>
            <p className="mt-3 text-white/75">{getStarted.note}</p>
            <StoreBadges className="mt-5" />
            <div>
              <ul className="mt-6 space-y-1 text-lg">
                <li>
                  <a href={`mailto:${closing.email}`} className="underline-offset-4 hover:underline">
                    {closing.email}
                  </a>
                </li>
                <li>
                  <a href={closing.phone.href} className="underline-offset-4 hover:underline">
                    {closing.phone.display}
                  </a>
                </li>
                <li>
                  <a
                    href={closing.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    {closing.website.display}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/15">
          <div className="shell flex flex-col gap-2 py-6 text-sm text-white/70 lg:flex-row lg:justify-between">
            <p>{closing.copyright}</p>
            <p className="font-semibold tracking-wide">{closing.keywords}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
