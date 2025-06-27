import imagePaths from "@/constants/imagePaths";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src={`${imagePaths.image}/homeHero.png`}
          alt="Hero Image"
          fill
          
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 max-w-2xl leading-relaxed">
            Get Everything You Need
            <br /> Instantly with Higalo!
          </h1>
          <Link
            href="/order"
            className="bg-orange hover:bg-darkOrange md:text-lg font-semibold px-4 py-2 rounded-lg shadow transition-colors duration-200"
          >
            Order Now!
          </Link>
        </div>
      </div>
    </div>
  );
}
