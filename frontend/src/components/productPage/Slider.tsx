import imagePaths from "@/constants/imagePaths";
import Image from "next/image";

type SliderProps = {
  images: string[];
};

export default function Slider({ images }: SliderProps) {
  return (
    <div className="w-full overflow-x-auto ">
      <div className="flex">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative min-w-full w-full aspect-square "
          >
            <Image
              src={`${imagePaths.products}/${img}`}
              alt={img}
              fill
              style={{ objectFit: "contain" }}
              sizes="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
