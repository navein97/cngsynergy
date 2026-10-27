import Image from "next/image";
import { prohayat } from "@/content/prohayat";

/**
 * Official app store badges for ProHayat 180, used on the home page and the
 * ProHayat 180 page. Links and badge files are set in
 * `prohayat.getStarted.stores` (src/content/prohayat.ts).
 * A store with an empty `href` is not shown.
 */
export function StoreBadges({ className = "" }: { className?: string }) {
  const stores = Object.values(prohayat.getStarted.stores).filter((store) => store.href);

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {stores.map((store) => (
        <a key={store.href} href={store.href} target="_blank" rel="noopener noreferrer">
          <Image
            src={store.badge}
            alt={store.label}
            width={store.width}
            height={53}
            unoptimized
            className="h-[53px] w-auto"
          />
        </a>
      ))}
    </div>
  );
}
