import Image from "next/image";
import type { SVGProps } from "react";

/**
 * Line icons used across the site. Add a new one by adding a key to `paths`.
 * All icons are drawn on a 24x24 grid with a 1.75 stroke.
 */
const paths = {
  phone: (
    <path d="M5 4h3.5l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 7 8.5-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  menu: <path d="M3 6.5h18M3 12h18M3 17.5h18" />,
  close: <path d="m5 5 14 14M19 5 5 19" />,
  factory: (
    <>
      <path d="M3 21V10l6 3.5V10l6 3.5V4h4a2 2 0 0 1 2 2v15Z" />
      <path d="M7.5 17h2m3.5 0h2" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h12v10H2zM14 9h4.5L22 12.5V16h-8" />
      <circle cx="6.5" cy="17.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
    </>
  ),
  warehouse: (
    <>
      <path d="M2.5 21V9L12 3.5 21.5 9v12" />
      <path d="M7 21v-8h10v8M7 17h10" />
    </>
  ),
  strategy: (
    <>
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="5.5" r="2.5" />
      <path d="M8 18.5h5.5a3.5 3.5 0 0 0 0-7h-3a3.5 3.5 0 0 1 0-7H16" />
    </>
  ),
  advisory: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 14.5V21M9.8 10.8 3.5 9m10.7 1.8L20.5 9" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

/**
 * WhatsApp glyph for the "WhatsApp us" buttons.
 * The drawing is the file public/images/whatsapp.svg (white, for dark buttons).
 */
export function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <Image
      src="/images/whatsapp.svg"
      alt=""
      width={size}
      height={size}
      unoptimized
      aria-hidden="true"
      className="shrink-0"
    />
  );
}
