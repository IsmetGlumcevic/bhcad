import type { CSSProperties } from "react";

type HeroVideoProps = {
  id?: string;
  badge: string;
  description: string;
  videoSrc: string;
  posterSrc?: string;
  overlayGradient?: string;
  videoType?: string;
  offset?: number;
};

export function HeroVideo({
  id,
  badge,
  description,
  videoSrc,
  posterSrc,
  videoType = "video/mp4",
  overlayGradient = "from-black/30 via-emerald-900/30 to-emerald-900/70",
  offset = 0,
}: HeroVideoProps) {
  const minHeightStyle: CSSProperties = {
    minHeight: offset
      ? `calc(100vh - ${Math.max(offset, 0)}px)`
      : "100vh",
  };

  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-black text-white"
      style={minHeightStyle}
    >
      <div aria-hidden className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
        >
          <source src={videoSrc} type={videoType} />
        </video>
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayGradient}`} />
      </div>
    </section>
  );
}
