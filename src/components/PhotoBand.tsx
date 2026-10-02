import Image from "next/image";

/** Wide photo strip. Put the image file in public/images and pass its path. */
export function PhotoBand({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[21/9]">
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </div>
  );
}
