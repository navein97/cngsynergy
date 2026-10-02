/**
 * Promotional video section. Not used on any page yet.
 *
 * To add a video to a page:
 *   1. Put the .mp4 in public/videos (keep it under about 50 MB; host longer
 *      videos on YouTube or Vercel Blob and use the `youtubeId` option).
 *   2. Put a still image for the first frame in public/images.
 *   3. Add <VideoBlock ... /> to the page file.
 *
 * Examples:
 *   <VideoBlock title="See how we work" src="/videos/promo.mp4" poster="/images/promo.jpg" />
 *   <VideoBlock title="See how we work" youtubeId="VIDEO_ID" />
 */
export function VideoBlock({
  title,
  src,
  poster,
  youtubeId,
}: {
  title: string;
  src?: string;
  poster?: string;
  youtubeId?: string;
}) {
  return (
    <section className="bg-white">
      <div className="shell py-16 lg:py-24">
        <h2 className="display-2 text-ink">{title}</h2>
        <div className="mt-8 aspect-video w-full overflow-hidden rounded-[3px] bg-ink">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
              title={title}
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              className="size-full border-0"
            />
          ) : (
            <video
              src={src}
              poster={poster}
              controls
              playsInline
              preload="metadata"
              className="size-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
