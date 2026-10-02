"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { navigation } from "@/content/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="on-dark sticky top-0 z-40 bg-ink text-white">
      <div className="shell flex h-18 items-center justify-between gap-6 lg:h-22">
        <Link
          href="/"
          className="shrink-0"
          aria-label="CNG Synergy home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/cng-logo.png"
            alt="CNG Synergy. Optimizing Logistics, Elevating Performance"
            width={500}
            height={65}
            priority
            className="h-auto w-52 sm:w-60 lg:w-72"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`relative block px-4 py-2 text-[1.0625rem] font-medium transition-colors hover:text-white ${
                      current ? "text-white" : "text-mist"
                    }`}
                  >
                    {item.label}
                    {current && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-[3px] bg-signal" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 flex size-12 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <Icon name={open ? "close" : "menu"} width={28} height={28} />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!open}
        className="border-t border-white/15 lg:hidden"
      >
        <ul className="shell py-3">
          {navigation.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 py-3.5 font-display text-2xl font-semibold ${
                    current ? "text-white" : "text-mist"
                  }`}
                >
                  <span
                    className={`h-[3px] w-5 ${current ? "bg-signal" : "bg-white/25"}`}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
