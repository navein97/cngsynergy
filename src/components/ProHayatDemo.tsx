"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { ScrollProgress } from "@/components/ScrollProgress";
import { prohayat } from "@/content/prohayat";

/**
 * The interactive middle of the ProHayat 180 page:
 *   1. vehicle buttons, which choose the scenario shown in the phone,
 *   2. the phone, where the visitor answers and gets coaching,
 *   3. the manager dashboard, where that answer appears as a record.
 *
 * All text and the scenarios themselves live in src/content/prohayat.ts.
 */

const barTone = {
  blue: "bg-pd-blue",
  orange: "bg-pd-orange",
  sky: "bg-pd-sky",
} as const;

type Scenario = {
  vehicle: string;
  question: string;
  options: readonly { text: string; correct: boolean }[];
  coaching: string;
};

export function ProHayatDemo() {
  const { vehicles, drivers, managers } = prohayat;
  const scenarios: readonly Scenario[] = vehicles.scenarios;
  const { dashboard } = managers;

  const [vehicle, setVehicle] = useState(0);
  /** The option picked for each vehicle's scenario, or null if not answered yet. */
  const [answers, setAnswers] = useState<(number | null)[]>(() => scenarios.map(() => null));
  const [latest, setLatest] = useState<number | null>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const scenario = scenarios[vehicle];
  const picked = answers[vehicle];
  const answered = picked !== null;
  const pickedCorrect = answered && scenario.options[picked].correct;

  /** Switch vehicle and make sure the phone is on screen. */
  const chooseVehicle = (index: number) => {
    setVehicle(index);
    const phone = phoneRef.current;
    if (!phone) return;
    const rect = phone.getBoundingClientRect();
    if (rect.top < 96 || rect.bottom > window.innerHeight) {
      phone.scrollIntoView({ block: "start" });
    }
  };

  const answer = (option: number) => {
    if (answered) return;
    setAnswers((current) => current.map((value, index) => (index === vehicle ? option : value)));
    setLatest(vehicle);
  };

  const latestCorrect =
    latest !== null && answers[latest] !== null
      ? scenarios[latest].options[answers[latest] as number].correct
      : false;

  return (
    <>
      {/* Vehicle buttons */}
      <div className="shell -mt-7">
        <div
          role="group"
          aria-label={vehicles.label}
          className="rounded-lg border border-pd-line bg-white px-4 py-4 sm:px-6 sm:py-5"
        >
          <p className="font-semibold text-pd-navy/70">{vehicles.label}</p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {scenarios.map((item, index) => {
              const selected = index === vehicle;
              return (
                <button
                  key={item.vehicle}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => chooseVehicle(index)}
                  className={`flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border-2 px-4 py-2 text-left font-semibold leading-tight transition-colors ${
                    selected
                      ? "border-pd-navy bg-pd-navy text-white"
                      : "border-pd-line bg-white hover:border-pd-navy"
                  }`}
                >
                  {answers[index] !== null ? (
                    <Icon name="check" width={16} height={16} strokeWidth={3} className="shrink-0 text-pd-orange" />
                  ) : (
                    <span className="size-2 shrink-0 rounded-full bg-pd-orange" />
                  )}
                  {item.vehicle}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* For drivers: try a scenario */}
      <section className="shell grid gap-10 py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
        <div>
          <Badge>{drivers.badge}</Badge>
          <h2 className="display-2 mt-5">{drivers.title}</h2>
          <p className="mt-4 text-lg text-pd-navy/75">{drivers.body}</p>
          <p className="mt-6 text-lg">{drivers.summary}</p>
          <FeatureList items={drivers.features} />
        </div>

        <div
          ref={phoneRef}
          className="flex scroll-mt-[calc(var(--header-h)+1rem)] flex-col items-center rounded-2xl border border-pd-line bg-white px-4 py-8 sm:py-10"
        >
          <div className="w-full max-w-[20rem] rounded-[2.25rem] bg-pd-navy p-2.5 shadow-[0_18px_40px_-18px_rgb(5_28_51/0.55)]">
            {/* Same layout as the quiz screen in the app */}
            <div className="relative rounded-[1.75rem] bg-pd-surface px-3.5 pb-5 pt-8">
              <span className="absolute left-1/2 top-2.5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-pd-navy" />
              <div className="relative flex items-center justify-center">
                <Icon name="arrow" width={18} height={18} className="absolute left-0 rotate-180" />
                <span className="text-[0.9375rem]">{drivers.phone.batch}</span>
              </div>
              <div className="-mx-3.5 mt-3 flex items-center justify-between border-b border-pd-line px-3.5 pb-2.5 text-[0.8125rem]">
                <span>{drivers.phone.question}</span>
                <span className="text-[0.6875rem] tracking-wide">
                  {drivers.phone.accuracy}: <strong>{answered && pickedCorrect ? 100 : 0}%</strong>
                </span>
              </div>
              <p className="mt-3 rounded-xl bg-white px-3.5 py-3 text-[0.9375rem] leading-snug shadow-[0_2px_8px_rgb(5_28_51/0.08)]">
                {scenario.question}
              </p>
              <ul className="mt-3 space-y-2">
                {scenario.options.map((option, index) => {
                  const chosen = picked === index;
                  const tone = !answered
                    ? "cursor-pointer border-transparent bg-white shadow-[0_2px_8px_rgb(5_28_51/0.08)] hover:border-pd-navy"
                    : option.correct
                      ? "border-pd-green bg-pd-green-soft font-semibold"
                      : chosen
                        ? "border-pd-orange bg-pd-orange-soft font-semibold"
                        : "border-transparent bg-white opacity-55";
                  return (
                    <li key={option.text}>
                      <button
                        type="button"
                        aria-pressed={chosen}
                        aria-disabled={answered}
                        onClick={() => answer(index)}
                        className={`flex min-h-11 w-full items-center gap-3 rounded-xl border-2 px-3 py-2.5 text-left text-sm leading-snug transition-colors ${tone}`}
                      >
                        <span className="w-3 shrink-0 text-center">
                          {answered && option.correct ? (
                            <Icon name="check" width={14} height={14} strokeWidth={3} className="text-pd-green" />
                          ) : chosen && !option.correct ? (
                            <Icon name="close" width={12} height={12} strokeWidth={3} />
                          ) : (
                            String.fromCharCode(65 + index)
                          )}
                        </span>
                        {option.text}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div role="status">
                {answered && (
                  <>
                    <p
                      className={`mt-3 rounded-lg px-3 py-2.5 text-sm leading-snug ${
                        pickedCorrect ? "bg-pd-green-soft" : "bg-pd-orange-soft"
                      }`}
                    >
                      <strong className={`font-semibold ${pickedCorrect ? "text-pd-green" : ""}`}>
                        {pickedCorrect ? drivers.phone.correct : drivers.phone.coached}
                      </strong>{" "}
                      {scenario.coaching}
                    </p>
                    <button
                      type="button"
                      onClick={() => chooseVehicle((vehicle + 1) % scenarios.length)}
                      className="mt-3 flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-pd-navy px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pd-blue"
                    >
                      {drivers.phone.next}
                      <Icon name="arrow" width={16} height={16} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-pd-navy/70">
            <span className="size-2 rounded-full bg-pd-green" />
            {drivers.phone.caption}
          </p>
        </div>
      </section>

      {/* For managers: the answer shows up as a record */}
      <section className="border-t border-pd-line bg-white">
        <div className="shell grid gap-10 py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
          <div>
            <Badge>{managers.badge}</Badge>
            <h2 className="display-2 mt-5">{managers.title}</h2>
            <p className="mt-4 text-lg text-pd-navy/75">{managers.body}</p>
            <FeatureList items={managers.features} />
          </div>

          <ScrollProgress from={0.95} to={0.7} className="lg:order-first">
            <div className="rounded-xl border border-pd-line bg-pd-surface p-5 sm:p-7">
              <div className="flex items-center justify-between text-sm font-semibold tracking-wide">
                <span>{dashboard.title}</span>
                <span className="flex items-center gap-2 text-pd-green">
                  <span className="size-2 rounded-full bg-pd-green" />
                  {dashboard.live}
                </span>
              </div>
              <dl className="mt-6 space-y-5">
                {dashboard.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between font-semibold">
                      <dt>{metric.label}</dt>
                      <dd>{metric.value}%</dd>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-pd-line">
                      <div
                        className={`meter-fill h-full rounded-full ${barTone[metric.tone]}`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-pd-line pt-5">
                <span className="text-lg font-semibold">{dashboard.stat}</span>
                <span className="rounded-full bg-pd-green-soft px-3 py-1 text-sm font-semibold text-pd-green">
                  {dashboard.change}
                </span>
              </div>
              <div role="status" className="mt-5 rounded-lg border border-pd-line bg-white px-4 py-3.5">
                <p className="text-sm font-semibold tracking-wide text-pd-navy/60">
                  {dashboard.record.title}
                </p>
                {latest === null ? (
                  <p className="mt-1 text-pd-navy/75">{dashboard.record.empty}</p>
                ) : (
                  <p className="mt-1 flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
                    <span>
                      <span className="font-semibold">{scenarios[latest].vehicle}</span>
                      <span className="block text-sm text-pd-navy/70">{dashboard.record.who}</span>
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        latestCorrect
                          ? "bg-pd-green-soft text-pd-green"
                          : "bg-pd-orange-soft text-pd-navy"
                      }`}
                    >
                      {latestCorrect ? dashboard.record.correct : dashboard.record.coached}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </ScrollProgress>
        </div>
      </section>
    </>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-pd-orange-soft px-4 py-1.5 text-[0.9375rem] font-semibold text-pd-navy">
      {children}
    </span>
  );
}

/** Feature list whose ticks draw themselves as the list scrolls into view. */
function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ScrollProgress from={0.95} to={0.75}>
      <ul className="ticks mt-7 space-y-3.5" style={{ "--n": items.length } as CSSProperties}>
        {items.map((item, index) => (
          <li
            key={item}
            className="flex items-start gap-3 text-lg font-medium"
            style={{ "--i": index } as CSSProperties}
          >
            <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-pd-navy text-white">
              <Icon name="check" width={13} height={13} strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </ScrollProgress>
  );
}
