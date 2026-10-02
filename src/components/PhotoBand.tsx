import Image from "next/image";
import { ScrollProgress } from "@/components/ScrollProgress";

/**
 * Wide photo strip. Put the image file in public/images and pass its path.
 * With `opensOnScroll`, the photo opens out to full width as it scrolls into view.
 */
export function PhotoBand({
  src,
  alt,
  opensOnScroll = false,
}: {
  src: string;
  alt: string;
  opensOnScroll?: boolean;
}) {
  const photo = (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden sm:aspect-[21/9] ${
        opensOnScroll ? "photo-open" : ""
      }`}
    >
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </div>
  );
  return opensOnScroll ? (
    <ScrollProgress from={1} to={0.85}>
      {photo}
    </ScrollProgress>
  ) : (
    photo
  );
}
