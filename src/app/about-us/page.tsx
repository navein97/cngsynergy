import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { PhotoBand } from "@/components/PhotoBand";
import { PracticalSolutions } from "@/components/PracticalSolutions";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: about.title,
  description: about.whyChoose.body,
  alternates: { canonical: "/about-us/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={about.title} />

      <section className="bg-white">
        <div className="shell grid gap-6 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-24">
          <h2 className="display-2 text-ink">{about.whyChoose.title}</h2>
          <p className="max-w-[62ch] text-xl leading-relaxed">
            {about.whyChoose.body}
          </p>
        </div>
      </section>

      <PhotoBand
        src="/images/container-ship.jpg"
        alt="A fully loaded container ship under way."
      />

      <section className="bg-dock">
        <div className="shell py-16 lg:py-24">
          <h2 className="display-2 text-ink">{about.aim.title}</h2>
          <div className="lane mt-7 max-w-md text-signal" />
          <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {about.aim.items.map((item) => (
              <div key={item.title} className="border-t border-ink/20 pt-6">
                <dt className="display-3 text-ink">{item.title}</dt>
                <dd className="mt-3 max-w-[52ch] text-lg">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <PracticalSolutions showButton={false} />

      <section className="bg-white">
        <div className="shell flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div>
            <h2 className="display-2 text-ink">{about.questions.title}</h2>
            <p className="mt-4 max-w-[52ch] text-xl">{about.questions.body}</p>
          </div>
          <Link href="/contact-us/" className="btn btn-primary self-start lg:self-auto">
            Contact us
            <Icon name="arrow" width={20} height={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
