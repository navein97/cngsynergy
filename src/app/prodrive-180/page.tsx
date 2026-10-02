import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { prodrive } from "@/content/prodrive";

export const metadata: Metadata = {
  title: { absolute: prodrive.metaTitle },
  description: prodrive.metaDescription,
  alternates: { canonical: "/prodrive-180/" },
};

const barTone = {
  blue: "bg-pd-blue",
  orange: "bg-pd-orange",
  sky: "bg-pd-sky",
} as const;

export default function ProDrivePage() {
  const { hero, drivers, managers, closing } = prodrive;

  return (
    <div className="bg-pd-surface text-pd-navy">
      {/* Hero */}
      <header className="on-dark bg-pd-navy text-white">
        <div className="shell pb-16 pt-12 sm:pt-16 lg:pb-24">
          <Badge>{hero.badge}</Badge>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
            <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.95]">
              <span className="text-pd-orange">
                ProDrive 180<sup className="text-[0.45em]">™</sup>
              </span>{" "}
              {hero.title}
            </h1>
            <div>
              <p className="text-xl font-medium leading-snug sm:text-2xl">{hero.sub}</p>
              <p className="mt-4 text-lg text-white/75">{hero.body}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Vehicle categories */}
      <div className="shell -mt-7">
        <ul
          aria-label="Vehicle categories"
          className="flex flex-wrap gap-x-8 gap-y-2 rounded-lg border border-pd-line bg-white px-6 py-4 font-semibold sm:px-8"
        >
          {prodrive.vehicleCategories.map((category) => (
            <li key={category} className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-pd-orange" />
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* For drivers / for managers */}
      <div className="shell grid gap-6 py-10 lg:grid-cols-2 lg:items-start lg:py-14">
        <article className="rounded-2xl border border-pd-line bg-white p-6 sm:p-10">
          <Badge>{drivers.badge}</Badge>
          <h2 className="display-2 mt-5">{drivers.title}</h2>
          <p className="mt-4 text-lg text-pd-navy/75">{drivers.body}</p>

          <div className="mt-8 flex flex-col items-center rounded-xl bg-pd-surface px-4 py-8">
            <PhoneMockup />
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-pd-navy/70">
              <span className="size-2 rounded-full bg-pd-green" />
              {drivers.phone.caption}
            </p>
          </div>

          <p className="mt-8 text-lg">{drivers.summary}</p>
          <FeatureList items={drivers.features} />
        </article>

        <article className="rounded-2xl border border-pd-line bg-white p-6 sm:p-10">
          <Badge>{managers.badge}</Badge>
          <h2 className="display-2 mt-5">{managers.title}</h2>
          <p className="mt-4 text-lg text-pd-navy/75">{managers.body}</p>

          <div className="mt-8 rounded-xl border border-pd-line bg-pd-surface p-5 sm:p-7">
            <div className="flex items-center justify-between text-sm font-semibold tracking-wide">
              <span>{managers.dashboard.title}</span>
              <span className="flex items-center gap-2 text-pd-green">
                <span className="size-2 rounded-full bg-pd-green" />
                {managers.dashboard.live}
              </span>
            </div>
            <dl className="mt-6 space-y-5">
              {managers.dashboard.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between font-semibold">
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}%</dd>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-pd-line">
                    <div
                      className={`h-full origin-left rounded-full motion-safe:animate-fill ${barTone[metric.tone]}`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-pd-line pt-5">
              <span className="text-lg font-semibold">{managers.dashboard.stat}</span>
              <span className="rounded-full bg-pd-green-soft px-3 py-1 text-sm font-semibold text-pd-green">
                {managers.dashboard.change}
              </span>
            </div>
          </div>

          <FeatureList items={managers.features} />
        </article>
      </div>

      {/* Closing */}
      <section className="on-dark bg-pd-navy text-white">
        <div className="shell flex flex-col gap-10 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none">
            {closing.headline[0]}
            <br />
            <span className="text-pd-orange">{closing.headline[1]}</span>
          </h2>
          <div className="flex items-center gap-6">
            <div className="shrink-0 rounded-lg bg-white p-2.5">
              <Image
                src="/images/prodrive-qr.png"
                alt={closing.qrAlt}
                width={200}
                height={200}
                unoptimized
                className="size-24 [image-rendering:pixelated]"
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-pd-orange">
                {closing.qrLabel}
              </p>
              <ul className="mt-2 space-y-1 text-lg">
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-pd-orange-soft px-4 py-1.5 text-[0.9375rem] font-semibold text-pd-navy">
      {children}
    </span>
  );
}

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-7 space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-lg font-medium">
          <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-pd-navy text-white">
            <Icon name="check" width={13} height={13} strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Static picture of the driver app, built in HTML so the text stays editable. */
function PhoneMockup() {
  const { phone } = prodrive.drivers;
  return (
    <div
      role="img"
      aria-label={`Driver app showing a live scenario: ${phone.question} The selected answer is "${phone.options.find((option) => option.selected)?.text}".`}
      className="w-full max-w-[17.5rem] rounded-[2.25rem] bg-pd-navy p-2.5 shadow-[0_18px_40px_-18px_rgb(5_28_51/0.55)]"
    >
      <div aria-hidden="true" className="relative rounded-[1.75rem] bg-white px-4 pb-5 pt-8">
        <span className="absolute left-1/2 top-2.5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-pd-navy" />
        <div className="flex justify-between text-[0.6875rem] font-semibold tracking-wide text-pd-navy/60">
          <span>{phone.stage}</span>
          <span>{phone.day}</span>
        </div>
        <p className="mt-3 text-[0.6875rem] font-semibold tracking-wide text-pd-orange">
          {phone.label}
        </p>
        <p className="mt-1 text-[0.9375rem] font-semibold leading-snug">{phone.question}</p>

        {/* Blind junction in the rain */}
        <svg viewBox="0 0 240 96" className="mt-3 block w-full rounded-lg">
          <rect width="240" height="96" fill="#dfe6ee" />
          <rect x="96" width="48" height="96" fill="#5a6577" />
          <rect y="26" width="240" height="40" fill="#5a6577" />
          <path d="M120 70v26" stroke="#fff" strokeWidth="2" strokeDasharray="6 5" />
          <path d="M0 46h92m56 0h92" stroke="#fff" strokeWidth="2" strokeDasharray="8 6" />
          <rect x="112" y="74" width="16" height="20" rx="3" fill="#f07d3e" />
          <g stroke="#4a90c4" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
            <path d="m20 6-3 8m30-10-3 8m34-4-3 8m94-10-3 8m30-6-3 8m28-10-3 8M34 74l-3 8m30-6-3 8m116-8-3 8m32-6-3 8" />
          </g>
        </svg>

        <ul className="mt-3 space-y-1.5">
          {phone.options.map((option) => (
            <li
              key={option.text}
              className={`flex items-start gap-2 rounded-lg border px-2.5 py-2 text-[0.75rem] leading-snug ${
                option.selected
                  ? "border-pd-green bg-pd-green-soft font-semibold"
                  : "border-pd-line"
              }`}
            >
              <span
                className={`mt-0.5 size-3 shrink-0 rounded-full border-2 ${
                  option.selected ? "border-pd-green bg-pd-green" : "border-pd-navy/30"
                }`}
              />
              {option.text}
            </li>
          ))}
        </ul>
        <p className="mt-3 rounded-lg bg-pd-green-soft px-2.5 py-2 text-[0.75rem] font-semibold text-pd-green">
          {phone.feedback}
        </p>
      </div>
    </div>
  );
}
