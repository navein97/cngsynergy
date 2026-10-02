import { Icon, type IconName } from "@/components/Icon";

/**
 * Hero illustration: a road linking the three parties CNG Synergy works
 * between. The road draws in once on page load and a consignment travels
 * along it. With reduced motion switched on, it simply appears.
 */

const stopIcons: IconName[] = ["factory", "truck", "warehouse"];
const HIGH = 86;
const LOW = 150;
const BLEED = 1400;

/** Builds the road for a drawing of the given width, with three evenly spaced stops. */
function buildRoad(width: number) {
  const x = [width / 6, width / 2, (width * 5) / 6];
  const lead = width / 10;
  const bend = (x[1] - x[0]) * 0.4;
  const curves = [
    `C ${x[0] - lead} ${LOW} ${x[0] - lead * 0.75} ${HIGH} ${x[0]} ${HIGH}`,
    `C ${x[0] + bend} ${HIGH} ${x[1] - bend} ${LOW} ${x[1]} ${LOW}`,
    `C ${x[1] + bend} ${LOW} ${x[2] - bend} ${HIGH} ${x[2]} ${HIGH}`,
  ].join(" ");
  /* The consignment's trip: from the left edge to the last stop. */
  const journey = `M -40 ${LOW} ${curves}`;
  /* The road itself runs on past both edges of the screen. */
  const road = `M ${-BLEED} ${LOW} H -40 ${curves} C ${x[2] + lead * 0.75} ${HIGH} ${x[2] + lead} ${LOW} ${width + 40} ${LOW} H ${width + BLEED}`;
  const stops = x.map((cx, index) => ({
    x: cx,
    y: index === 1 ? LOW : HIGH,
    icon: stopIcons[index],
  }));
  return { road, journey, stops };
}

function Road({ width, className }: { width: number; className: string }) {
  const { road, journey, stops } = buildRoad(width);
  return (
    <svg
      viewBox={`0 0 ${width} 236`}
      className={`h-auto w-full overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d={road}
        fill="none"
        stroke="var(--color-ink-raised)"
        strokeWidth="58"
        strokeLinecap="round"
      />
      <path
        d={road}
        fill="none"
        stroke="rgb(255 255 255 / 0.5)"
        strokeWidth="3"
        strokeDasharray="22 16"
      />
      {/* The consignment. It stops on the last stretch, just before the warehouse. */}
      <rect
        x="-14"
        y="-14"
        width="28"
        height="28"
        rx="3"
        fill="var(--color-signal)"
        className="animate-travel"
        style={{ offsetPath: `path("${journey}")`, offsetRotate: "auto" }}
      />
      {stops.map((stop) => (
        <g key={stop.icon} transform={`translate(${stop.x} ${stop.y})`}>
          <circle r="46" fill="var(--color-ink)" stroke="white" strokeWidth="3" />
          <Icon
            name={stop.icon}
            x={-22}
            y={-22}
            width={44}
            height={44}
            className="text-white"
            strokeWidth={1.5}
          />
        </g>
      ))}
    </svg>
  );
}

export function RouteDiagram({
  labels,
  description,
}: {
  labels: readonly string[];
  description: string;
}) {
  return (
    <figure aria-label={description} role="group">
      <div className="motion-safe:animate-reveal">
        {/* A tighter drawing on phones keeps the stops large enough to read. */}
        <Road width={640} className="block sm:hidden" />
        <Road width={1200} className="hidden sm:block" />
      </div>
      <figcaption className="mt-2 grid grid-cols-3 text-center font-display text-lg font-semibold text-white sm:mt-3 sm:text-2xl">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </figcaption>
    </figure>
  );
}
