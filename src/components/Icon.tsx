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
 * WhatsApp glyph for the "WhatsApp us" buttons and the footer.
 * Drawn in `currentColor`, so it takes the text colour (white on the green
 * button, `text-signal` red in the footer). Same drawing as public/images/whatsapp.svg.
 */
export function WhatsAppIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 720 720"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path d="M360,0C161.18,0,0,161.18,0,360c0,65.41,17.45,126.75,47.94,179.61L0,720l187.02-44.21c51.34,28.18,110.28,44.21,172.98,44.21,198.82,0,360-161.180,360-360S558.82,0,360,0ZM360,655.52c-60.17,0-116.13-17.98-162.820-48.87l-110.49,28.14,30.99-105.61c-33.53-47.93-53.2-106.26-53.2-169.190,0-163.21,132.31-295.52,295.52-295.52s295.52,132.31,295.52,295.52-132.31,295.52-295.52,295.52Z" />
      <path d="M444.35,407.52l87.1,41.06c4,1.88,6.56,5.94,6.2,10.34-.94,11.46-5.54,34.43-26.13,55.02-58.12,58.12-162.49-7.64-166.74-10.18-25.67-13.79-50.06-32.24-73.19-55.36s-41.58-47.52-55.370-73.19c-2.55-4.24-68.31-108.61-10.18-166.74,20.59-20.59,43.56-25.19,55.02-26.13,4.41-.36,8.46,2.2,10.34,6.2l41.07,87.1c1.94,4.12,1.09,9.02-2.13,12.24l-30.61,30.61c-6.62,6.62-8.56,16.93-4,25.11,11.17,20.03,26.19,39.32,43.59,57.07,17.75,17.4,37.04,32.43,57.07,43.59,8.18,4.560,18.48,2.62,25.11-4l30.61-30.61c3.22-3.22,8.12-4.08,12.24-2.13Z" />
    </svg>
  );
}
