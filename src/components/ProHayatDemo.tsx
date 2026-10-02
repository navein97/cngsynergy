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

type Scene = (typeof prohayat.vehicles.scenarios)[number]["scene"];

type Scenario = {
  vehicle: string;
  scene: Scene;
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
            <div className="relative rounded-[1.75rem] bg-white px-4 pb-5 pt-8">
              <span className="absolute left-1/2 top-2.5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-pd-navy" />
              <div className="flex justify-between text-xs font-semibold tracking-wide text-pd-navy/60">
                <span>{drivers.phone.stage}</span>
                <span>{drivers.phone.day}</span>
              </div>
              <p className="mt-3 text-xs font-semibold tracking-wide text-pd-orange">
                {drivers.phone.label}: {scenario.vehicle}
              </p>
              <p className="mt-1 font-semibold leading-snug">{scenario.question}</p>

              <SceneDrawing scene={scenario.scene} />

              <p className="mt-3 text-[0.8125rem] font-semibold text-pd-navy/60">
                {drivers.phone.prompt}
              </p>
              <ul className="mt-2 space-y-2">
                {scenario.options.map((option, index) => {
                  const chosen = picked === index;
                  const tone = !answered
                    ? "cursor-pointer border-pd-line hover:border-pd-navy"
                    : option.correct
                      ? "border-pd-green bg-pd-green-soft font-semibold"
                      : chosen
                        ? "border-pd-orange bg-pd-orange-soft font-semibold"
                        : "border-pd-line opacity-55";
                  return (
                    <li key={option.text}>
                      <button
                        type="button"
                        aria-pressed={chosen}
                        aria-disabled={answered}
                        onClick={() => answer(index)}
                        className={`flex min-h-11 w-full items-start gap-2.5 rounded-lg border-2 px-3 py-2.5 text-left text-sm leading-snug transition-colors ${tone}`}
                      >
                        <span
                          className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border-2 ${
                            answered && option.correct
                              ? "border-pd-green bg-pd-green text-white"
                              : chosen
                                ? "border-pd-orange bg-pd-orange text-white"
                                : "border-pd-navy/30"
                          }`}
                        >
                          {answered && option.correct && (
                            <Icon name="check" width={10} height={10} strokeWidth={4} />
                          )}
                          {chosen && !option.correct && (
                            <Icon name="close" width={9} height={9} strokeWidth={4} />
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

/** Small drawing at the top of each scenario. Add a new one here for a new `scene`. */
function SceneDrawing({ scene }: { scene: Scene }) {
  return (
    <svg viewBox="0 0 240 96" className="mt-3 block w-full rounded-lg" aria-hidden="true">
      <rect width="240" height="96" className="fill-pd-line" />
      {scene === "junction" ? (
        <>
          <rect x="96" width="48" height="96" className="fill-pd-navy/60" />
          <rect y="26" width="240" height="40" className="fill-pd-navy/60" />
          <path d="M120 70v26" stroke="white" strokeWidth="2" strokeDasharray="6 5" />
          <path d="M0 46h92m56 0h92" stroke="white" strokeWidth="2" strokeDasharray="8 6" />
          <rect x="112" y="74" width="16" height="20" rx="3" className="fill-pd-orange" />
          <path
            d="m20 6-3 8m30-10-3 8m34-4-3 8m94-10-3 8m30-6-3 8m28-10-3 8M34 74l-3 8m30-6-3 8m116-8-3 8m32-6-3 8"
            className="stroke-pd-sky"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          {/* Road */}
          <rect y="76" width="240" height="20" className="fill-pd-navy/60" />
          <path d="M0 87h240" stroke="white" strokeWidth="2" strokeDasharray="10 8" />

          {scene === "container" && (
            <>
              <rect x="38" y="30" width="122" height="36" rx="1.5" className="fill-pd-orange" />
              <path
                d="M52 34v28m12-28v28m12-28v28m12-28v28m12-28v28m12-28v28m12-28v28m12-28v28m12-28v28"
                stroke="white"
                strokeOpacity="0.45"
                strokeWidth="2"
              />
              <circle cx="158" cy="66" r="6" fill="white" className="stroke-pd-navy" strokeWidth="2.5" />
            </>
          )}
          {scene === "curtain" && (
            <>
              <rect x="38" y="28" width="122" height="38" rx="1.5" className="fill-pd-sky" />
              <path
                d="M52 28q4 19 0 38m16-38q4 19 0 38m16-38q4 19 0 38m16-38q4 19 0 38m16-38q4 19 0 38m16-38q4 19 0 38m16-38q4 19 0 38"
                fill="none"
                stroke="white"
                strokeOpacity="0.6"
                strokeWidth="1.5"
              />
              <path
                d="M4 22h24M10 36h20M2 50h26"
                className="stroke-pd-navy"
                strokeOpacity="0.5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </>
          )}
          {scene === "cargo" && (
            <>
              <rect x="44" y="42" width="26" height="24" className="fill-pd-orange" />
              <rect x="72" y="34" width="28" height="32" className="fill-pd-blue" />
              <rect x="102" y="46" width="24" height="20" className="fill-pd-orange" />
              <rect
                x="130"
                y="36"
                width="24"
                height="30"
                transform="rotate(9 142 66)"
                fill="white"
                className="stroke-pd-navy"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
            </>
          )}

          {/* Trailer bed, cab and wheels */}
          <rect x="34" y="66" width="132" height="5" className="fill-pd-navy" />
          <path d="M170 71V46a4 4 0 0 1 4-4h14l14 14v15Z" className="fill-pd-navy" />
          <path d="M187 47v10h12Z" className="fill-pd-line" />
          <g className="fill-pd-navy" stroke="white" strokeWidth="2">
            <circle cx="56" cy="75" r="7" />
            <circle cx="74" cy="75" r="7" />
            <circle cx="148" cy="75" r="7" />
            <circle cx="188" cy="75" r="7" />
          </g>
        </>
      )}
    </svg>
  );
}
