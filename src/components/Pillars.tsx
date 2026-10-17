import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { RichText } from "@/components/RichText";

/**
 * "Where CNG Synergy fits in your logistics": the four pillars shown as a
 * plain two-by-two grid. No scroll effects, so everything can be read at once.
 * The words live in `home.route` and `home.pillars` in src/content/home.ts.
 */

export type Pillar = {
  title: string;
  icon: IconName;
  body: string;
  list?: readonly string[];
};

type PillarLabels = {
  title: string;
  more: string;
  moreHref: string;
};

export function Pillars({
  pillars,
  labels,
}: {
  pillars: readonly Pillar[];
  labels: PillarLabels;
}) {
  return (
    <section className="bg-dock">
      <div className="shell py-16 lg:py-24">
        <h2 className="display-2 text-ink">{labels.title}</h2>
        <div className="lane mt-7 max-w-md text-signal" />
        <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="border-t border-ink/20 pt-7">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-route text-white">
                  <Icon name={pillar.icon} width={26} height={26} />
                </span>
                <h3 className="display-3 text-ink">{pillar.title}</h3>
              </div>
              <div className="mt-5 max-w-[62ch] text-lg leading-relaxed">
                <p>{pillar.body}</p>
                {pillar.list && (
                  <ul className="mt-4 space-y-4">
                    {pillar.list.map((item) => (
                      <li key={item} className="border-t border-ink/15 pt-4 [&_strong]:text-ink">
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-12">
          <Link
            href={labels.moreHref}
            className="inline-flex items-center gap-2 text-lg font-semibold text-signal-deep underline decoration-2 underline-offset-[6px] hover:decoration-[3px]"
          >
            {labels.more}
            <Icon name="arrow" width={20} height={20} />
          </Link>
        </p>
      </div>
    </section>
  );
}
