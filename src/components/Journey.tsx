"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Icon, type IconName } from "@/components/Icon";
import { RichText } from "@/components/RichText";

/**
 * The route on the home page. The section pins to the screen and the road
 * slides sideways as the visitor scrolls, carrying the red consignment from
 * one stop to the next. Each stop shows one block of text.
 *
 * The stops can also be reached with the bar at the top or the arrow buttons.
 *
 * On short screens, with reduced motion switched on, or without JavaScript,
 * the stops are shown as a plain list instead.
 *
 * Styles live in globals.css under "The route".
 */

export type JourneyStop = {
  title: string;
  icon: IconName;
  body: string;
  list?: readonly string[];
};

type JourneyLabels = {
  title: string;
  previous: string;
  next: string;
  more: string;
  moreHref: string;
};

const PINNED_QUERY = "(prefers-reduced-motion: no-preference) and (min-height: 600px)";

/** Share of the scroll spent resting on the first and on the last stop. */
const REST = 0.04;

/** Road centre line for one stop: half a wave either side of it. */
function roadPath(index: number) {
  const points: string[] = [];
  for (let step = 0; step <= 40; step++) {
    const position = index - 0.5 + step / 40;
    const y = 50 - 50 * Math.cos(Math.PI * position);
    points.push(`${step * 25} ${y.toFixed(2)}`);
  }
  return `M ${points.join(" L ")}`;
}

/** Slows the road down as it reaches each stop, so there is time to read. */
function settle(amount: number) {
  return amount < 0.5 ? 2 * amount * amount : 1 - 2 * (1 - amount) * (1 - amount);
}

export function Journey({
  stops,
  labels,
}: {
  stops: readonly JourneyStop[];
  labels: JourneyLabels;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);
  const last = stops.length - 1;

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const query = window.matchMedia(PINNED_QUERY);
    let isPinned = false;
    let stickyTop = 0;
    let wave = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!isPinned) return;
      const range = section.offsetHeight - stage.offsetHeight;
      const scrolled = stickyTop - section.getBoundingClientRect().top;
      const raw = range > 0 ? scrolled / range : 0;
      const progress = Math.min(1, Math.max(0, (raw - REST) / (1 - 2 * REST)));
      const between = progress * last;
      const from = Math.min(Math.floor(between), Math.max(last - 1, 0));
      const position = from + settle(between - from);
      const slope = (wave * Math.PI * Math.sin(Math.PI * position)) / stage.clientWidth;

      stage.style.setProperty("--u", position.toFixed(4));
      stage.style.setProperty("--cos", Math.cos(Math.PI * position).toFixed(4));
      stage.style.setProperty("--tilt", `${((Math.atan(slope) * 180) / Math.PI).toFixed(2)}deg`);
      setActive(Math.round(position));
    };

    /** Pin the section only if every stop's text fits on this screen. */
    const measure = () => {
      let fits = query.matches;
      if (fits) {
        section.setAttribute("data-pinned", "");
        const styles = getComputedStyle(stage);
        stickyTop = parseFloat(styles.top) || 0;
        wave = parseFloat(styles.getPropertyValue("--amp")) || 0;
        for (const copy of stage.querySelectorAll<HTMLElement>(".journey-copy")) {
          const inner = copy.firstElementChild as HTMLElement | null;
          if (inner && inner.offsetHeight > copy.clientHeight + 1) fits = false;
        }
      }
      if (!fits) section.removeAttribute("data-pinned");
      isPinned = fits;
      setPinned(fits);
      update();
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const first = requestAnimationFrame(measure);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    query.addEventListener("change", measure);
    return () => {
      cancelAnimationFrame(first);
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      query.removeEventListener("change", measure);
    };
  }, [last]);

  const goTo = (index: number) => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage || !pinned) return;
    const target = Math.min(last, Math.max(0, index));
    const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    const start = section.getBoundingClientRect().top + window.scrollY - stickyTop;
    const range = section.offsetHeight - stage.offsetHeight;
    const share = last > 0 ? target / last : 0;
    window.scrollTo({
      top: start + range * (REST + share * (1 - 2 * REST)),
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="journey-title"
      data-pinned={pinned ? "" : undefined}
      className="journey bg-dock"
      style={{ "--stops": stops.length } as CSSProperties}
    >
      <div ref={stageRef} className="journey-stage">
        <h2 id="journey-title" className="sr-only">
          {labels.title}
        </h2>

        <div className="journey-nav shell">
          <ol>
            {stops.map((stop, index) => (
              <li key={stop.title} style={{ "--k": index } as CSSProperties}>
                <button
                  type="button"
                  className="journey-step"
                  aria-current={index === active ? "step" : undefined}
                  onClick={() => goTo(index)}
                >
                  <span className="journey-step-bar" />
                  <span className="journey-step-label">{stop.title}</span>
                </button>
              </li>
            ))}
          </ol>
          {/* aria-disabled, not disabled: disabling a focused button stops the scroll. */}
          <button
            type="button"
            className="journey-arrow"
            onClick={() => goTo(active - 1)}
            aria-disabled={active === 0}
          >
            <span className="sr-only">{labels.previous}</span>
            <Icon name="arrow" className="rotate-180" />
          </button>
          <button
            type="button"
            className="journey-arrow"
            onClick={() => goTo(active + 1)}
            aria-disabled={active === last}
          >
            <span className="sr-only">{labels.next}</span>
            <Icon name="arrow" />
          </button>
        </div>

        <div className="journey-track">
          {stops.map((stop, index) => (
            <article
              key={stop.title}
              className={`journey-panel ${index === active ? "is-active" : ""}`}
              style={
                { "--k": index, "--side": index % 2 === 0 ? 1 : -1 } as CSSProperties
              }
              onFocus={() => {
                if (index !== active) goTo(index);
              }}
            >
              <div className="journey-copy">
                <div className="shell grid gap-5 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
                  <div>
                    <span className="journey-copy-icon">
                      <Icon name={stop.icon} width={28} height={28} />
                    </span>
                    <h3 className="display-2 text-ink">{stop.title}</h3>
                  </div>
                  <div className="journey-text max-w-[62ch]">
                    <p>{stop.body}</p>
                    {stop.list && (
                      <ul className="mt-4 space-y-4">
                        {stop.list.map((item) => (
                          <li key={item} className="border-t border-ink/20 pt-4 [&_strong]:text-ink">
                            <RichText text={item} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {index === last && (
                      <p className="mt-5">
                        <Link
                          href={labels.moreHref}
                          className="inline-flex items-center gap-2 font-semibold text-signal-deep underline decoration-2 underline-offset-[6px] hover:decoration-[3px]"
                        >
                          {labels.more}
                          <Icon name="arrow" width={20} height={20} />
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="journey-road" aria-hidden="true">
                <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
                  <path className="journey-tarmac" d={roadPath(index)} />
                  <path className="journey-dash" d={roadPath(index)} />
                </svg>
                <span className="journey-sign">
                  <Icon name={stop.icon} width={30} height={30} />
                </span>
              </div>
            </article>
          ))}
        </div>

        <span className="journey-load" aria-hidden="true" />
      </div>
    </section>
  );
}
