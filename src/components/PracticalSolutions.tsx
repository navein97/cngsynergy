import Link from "next/link";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { contact } from "@/content/contact";
import { practicalSolutions } from "@/content/home";
import { site } from "@/content/site";

/**
 * "We Deliver Practical Business Solutions" block, shared by Home and About.
 * `showDirect` adds the WhatsApp and phone buttons next to "Contact us".
 */
export function PracticalSolutions({
  showButton = true,
  showDirect = false,
}: {
  showButton?: boolean;
  showDirect?: boolean;
}) {
  return (
    <section className="on-dark bg-route text-white">
      <div className="shell grid gap-8 py-16 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16 lg:py-24">
        <h2 className="display-2">{practicalSolutions.title}</h2>
        <div>
          <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
            {practicalSolutions.body}
          </p>
          {showButton && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us/" className="btn bg-white text-route hover:bg-dock">
                Contact us
                <Icon name="arrow" width={20} height={20} />
              </Link>
              {showDirect && (
                <>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <WhatsAppIcon />
                    {contact.whatsappLabel}
                  </a>
                  <a href={site.phone.href} className="btn btn-outline-light">
                    <Icon name="phone" width={20} height={20} />
                    {site.phone.display}
                  </a>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
