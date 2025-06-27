import Image from "next/image";
import Link from "next/link";
import imagePaths from "@/constants/imagePaths";
import SearchForm from "./middleBarHeader/SearchForm";
import Cart from "./middleBarHeader/Cart";
export default function HeaderMiddleBar() {
  return (
    <div className="h-[62px] lg:h-[140px] border-white flex flex-row gap-5 lg:gap-15 w-full justify-between items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-darkBlue ">
      {/* Logo */}
      <Link href="/" aria-label="Home" className="flex items-center">
        <div className="w-[92px] h-[62px] lg:w-[140px] lg:h-[94px] relative">
          <Image
            src={`${imagePaths.image}/logo.svg`}
            alt="HIgalo logo"
            fill
            style={{ objectFit: "contain" }}
            sizes="(min-width: 1024px) 140px, 92px"
            priority
          />
        </div>
      </Link>

      {/* Search Bar */}
      <div className="hidden md:block flex-1">
        <SearchForm />
      </div>
      {/* Favorite & Cart Icons */}
      <div className="flex flex-row gap-2">
        <Link href="/" aria-label="Favorites">
          <Image
            width={24}
            height={24}
            src={`${imagePaths.icon}/favorite.svg`}
            alt="Favorite icon"
          />
        </Link>
        <Cart />
      </div>
    </div>
  );
}
