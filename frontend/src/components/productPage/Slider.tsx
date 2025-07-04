"use client";
import imagePaths from "@/constants/imagePaths";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "./slider-custom.css"; // <-- Add this line

type SliderProps = {
  images: string[];
};

export default function Slider({ images }: SliderProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full aspect-square"
              style={{ minHeight: 300 }}
            >
              <Image
                src={`${imagePaths.products}/${img}`}
                alt={img}
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
