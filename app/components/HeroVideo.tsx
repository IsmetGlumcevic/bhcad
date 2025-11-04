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

      <div className="relative mx-auto flex h-full min-h-[320px] max-w-6xl items-end px-4 py-16 md:min-h-[380px] md:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-4">
          <p className="inline-flex w-fit items-center rounded-full border border-white/30 px-4 py-1 text-xs font-heading uppercase tracking-[0.35em]">
            {badge}
          </p>
          <p className="max-w-xl text-base text-white/80 md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
