"use client";
import imagePaths from "@/constants/imagePaths";
import Image from "next/image";
import { useState } from "react";

const images = [
  `${imagePaths.homePageImages}/Back to School Banner.png`,
  `${imagePaths.homePageImages}/Back to School Banner.png`,
  `${imagePaths.homePageImages}/Back to School Banner.png`,
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-screen aspect-[4/3] md:aspect-[5/2] overflow-hidden">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-500 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Banner ${idx + 1}`}
            fill
            className="object-cover object-left"
            sizes="100vw"
            priority={idx === 0}
          />
        </div>
      ))}
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 text-xl font-bold z-20 h-8"
        aria-label="Previous"
      >
        <Image
          src={`${imagePaths.icon}/arrow.svg`}
          alt="Arrow"
          width={15}
          height={30}
          className="rotate-z-90"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 text-xl font-bold h-8 z-20"
        aria-label="Next"
      >
        <Image
          src={`${imagePaths.icon}/arrow.svg`}
          alt="Arrow"
          width={15}
          height={30}
          className="-rotate-z-90"
        />
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
