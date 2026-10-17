"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type FullscreenVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

/**
 * The ProHayat 180 trailer, full width under the page header.
 * It plays muted on a loop (not with reduced motion switched on). The button
 * restarts it from the beginning, with sound, full screen. When the visitor
 * leaves full screen or the trailer ends, it goes back to the muted loop.
 */
export function TrailerBand({
  title,
  label,
  src,
  poster,
}: {
  title: string;
  label: string;
  src: string;
  poster: string;
}) {
  const ref = useRef<FullscreenVideo>(null);
  const [withSound, setWithSound] = useState(false);

  const backToLoop = useCallback(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.loop = true;
    video.controls = false;
    setWithSound(false);
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.play().catch(() => {});
    }
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) backToLoop();
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    video.addEventListener("webkitendfullscreen", backToLoop);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      video.removeEventListener("webkitendfullscreen", backToLoop);
    };
  }, [backToLoop]);

  function playWithSound() {
    const video = ref.current;
    if (!video) return;
    video.muted = false;
    video.loop = false;
    video.controls = true;
    video.currentTime = 0;
    setWithSound(true);
    video.play().catch(() => {});
    if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => {});
    } else {
      video.webkitEnterFullscreen?.();
    }
  }

  function onEnded() {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    backToLoop();
  }

  return (
    <section aria-label={title} className="on-dark bg-pd-navy">
      <div className="shell pb-16 lg:pb-24">
        <div className="relative aspect-video w-full overflow-hidden rounded-[3px] bg-black">
          <video
            ref={ref}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={title}
            onEnded={onEnded}
            className="size-full object-cover"
          />
          {!withSound && (
            <button
              type="button"
              onClick={playWithSound}
              className="btn absolute bottom-4 left-4 bg-pd-orange text-pd-navy hover:bg-white sm:bottom-6 sm:left-6"
            >
              <span aria-hidden="true">▶</span> {label}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
