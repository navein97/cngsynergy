import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { navigation, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-ink text-mist">
      <div className="lane text-white/20" />
      <div className="shell py-14 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" aria-label="CNG Synergy home" className="inline-block">
            <Image
              src="/images/cng-logo.png"
              alt="CNG Synergy. Optimizing Logistics, Elevating Performance"
              width={500}
              height={65}
              className="h-auto w-64"
            />
          </Link>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium underline-offset-4 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 grid gap-10 border-t border-white/15 pt-12 sm:grid-cols-[1fr_1.2fr_1.6fr]">
          <div>
            <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold text-white">
              <Icon name="phone" className="text-signal" />
              Phone
            </h3>
            <p className="mt-3">
              <a
                href={site.phone.href}
                className="underline-offset-4 hover:text-white hover:underline"
              >
                {site.phone.display}
              </a>
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold text-white">
              <Icon name="mail" className="text-signal" />
              Mail
            </h3>
            <p className="mt-3 break-words">
              <a
                href={`mailto:${site.email}`}
                className="underline-offset-4 hover:text-white hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold text-white">
              <Icon name="pin" className="text-signal" />
              Address
            </h3>
            <address className="mt-3 not-italic">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="shell py-6 text-[0.9375rem]">© All Rights Reserved</p>
      </div>
    </footer>
  );
}
