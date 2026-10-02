import Link from "next/link";
import { Icon } from "@/components/Icon";
import { practicalSolutions } from "@/content/home";

/** "We Deliver Practical Business Solutions" block, shared by Home and About. */
export function PracticalSolutions({ showButton = true }: { showButton?: boolean }) {
  return (
    <section className="on-dark bg-route text-white">
      <div className="shell grid gap-8 py-16 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16 lg:py-24">
        <h2 className="display-2">{practicalSolutions.title}</h2>
        <div>
          <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
            {practicalSolutions.body}
          </p>
          {showButton && (
            <Link
              href="/contact-us/"
              className="btn mt-8 bg-white text-route hover:bg-dock"
            >
              Contact us
              <Icon name="arrow" width={20} height={20} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
