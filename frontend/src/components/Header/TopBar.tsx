
import Image from "next/image";
import Link from "next/link";
import imagePaths from "@/constants/imagePaths";


export default function HeaderTopBar() {

  return (
    <div className="h-[56px] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-row gap-5 items-center justify-between text-white w-full bg-darkBlue ">
      {/* Social Icons */}
      <div className="flex flex-row gap-2">
        <Link href="https://www.facebook.com/" aria-label="Facebook">
          <Image
            width={16}
            height={16}
            src={`${imagePaths.icon}/facebook.svg`}
            alt="Facebook icon"
          />
        </Link>
        <Link href="https://www.linkedin.com/" aria-label="LinkedIn">
          <Image
            width={16}
            height={16}
            src={`${imagePaths.icon}/linkedin.svg`}
            alt="LinkedIn icon"
          />
        </Link>
        <Link href="https://www.yahoo.com/" aria-label="Mail">
          <Image
            width={16}
            height={16}
            src={`${imagePaths.icon}/mail.svg`}
            alt="Mail icon"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex flex-row gap-2 text-sm">
        <Link href="/">Promotion .</Link>
        <Link href="/">Contact .</Link>
        <Link href="/">Frequently asked questions</Link>
      </div>

      {/* Selectors */}
      <div className="flex flex-row gap-2 items-center justify-center">
        {/* Currency Selector */}
        <div className="relative">
          <select
            className="text-sm cursor-pointer appearance-none pr-6 bg-transparent outline-none"
            aria-label="Currency"
           
          >
            <option className="text-black"> USD </option>
            <option className="text-black">EGP</option>
            <option className="text-black">AED</option>
          </select>
          <span
            className={`pointer-events-none absolute right-1 top-1/2 -translate-y-1/2`}
          >
            <Image
              src={`${imagePaths.icon}/arrow.svg`}
              alt="Dropdown Arrow"
              width={10}
              height={6}
            />
          </span>
        </div>
        {/* Language Selector */}
        <div className="relative">
          <select
            className="text-sm cursor-pointer appearance-none pr-6 bg-transparent outline-none"
            aria-label="Language"
          
          >
            <option className="text-black">English</option>
            <option className="text-black">عربي</option>
          </select>
          <span
            className={`pointer-events-none absolute right-1 top-1/2 -translate-y-1/2`}
          >
            <Image
              src={`${imagePaths.icon}/arrow.svg`}
              alt="Dropdown Arrow"
              width={10}
              height={6}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
