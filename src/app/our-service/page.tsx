import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: services.title,
  description: services.intro,
  alternates: { canonical: "/our-service/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title={services.title}>
        <p>{services.intro}</p>
      </PageHeader>

      <section className="bg-white">
        <div className="shell py-8 lg:py-12">
          {services.items.map((service) => (
            <article
              key={service.title}
              className="grid gap-5 border-b border-ink/15 py-10 last:border-b-0 lg:grid-cols-[5rem_1fr_1.5fr] lg:gap-10 lg:py-14"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-dock text-route">
                <Icon name={service.icon} width={32} height={32} />
              </div>
              <h2 className="display-2 text-ink">{service.title}</h2>
              <p className="max-w-[64ch] text-lg leading-relaxed">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
