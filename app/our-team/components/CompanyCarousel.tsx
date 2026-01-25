"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { companyPhotos } from "../../data/company";

export function CompanyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const totalSlides = companyPhotos.length;

  const activePhoto = useMemo(() => companyPhotos[activeIndex], [activeIndex]);

  const goToSlide = (index: number) => {
    const nextIndex = (index + totalSlides) % totalSlides;
    setActiveIndex(nextIndex);
  };

  const goNext = () => goToSlide(activeIndex + 1);
  const goPrev = () => goToSlide(activeIndex - 1);

  return (
    <section className="bg-gradient-to-b from-[#c9f2e5] to-[#eafaf5] py-16 md:py-24">
      <div className="mx-auto flex max-w-[600px] flex-col items-center gap-6 px-4">
        <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-xl shadow-emerald-300/40">
          <button
            type="button"
            onClick={() => setLightboxIndex(activeIndex)}
            className="block w-full"
            aria-label="Open photo"
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              width={600}
              height={700}
              className="h-auto w-full object-cover"
              priority
            />
          </button>
        </div>

        <div className="flex w-full items-center justify-between gap-4 text-sm font-semibold tracking-[0.2em] text-primary">
          <button
            type="button"
            onClick={goPrev}
            className="rounded-full border border-primary/20 px-4 py-2 transition hover:border-primary/60 hover:text-primary/80"
          >
            Prev
          </button>
          <span>
            {activeIndex + 1} / {totalSlides}
          </span>
          <button
            type="button"
            onClick={goNext}
            className="rounded-full border border-primary/20 px-4 py-2 transition hover:border-primary/60 hover:text-primary/80"
          >
            Next
          </button>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-primary shadow"
              aria-label="Close lightbox"
            >
              Close
            </button>
            <div className="overflow-hidden rounded-2xl bg-white">
              <Image
                src={companyPhotos[lightboxIndex].src}
                alt={companyPhotos[lightboxIndex].alt}
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm font-semibold text-white">
              <button
                type="button"
                onClick={() => setLightboxIndex((index) => (index === null ? 0 : (index - 1 + totalSlides) % totalSlides))}
                className="rounded-full border border-white/40 px-4 py-2 transition hover:border-white"
              >
                Prev
              </button>
              <span>
                {lightboxIndex + 1} / {totalSlides}
              </span>
              <button
                type="button"
                onClick={() => setLightboxIndex((index) => (index === null ? 0 : (index + 1) % totalSlides))}
                className="rounded-full border border-white/40 px-4 py-2 transition hover:border-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
