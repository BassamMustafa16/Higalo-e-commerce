import Image from "next/image";
import Link from "next/link";
import imagePaths from "@/constants/imagePaths";
export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 h-[56px] bg-white w-full text-sm">
      {/* Left */}
      <div className="hidden md:flex flex-row gap-3 items-center">
        <Image
          width={24}
          height={24}
          src={`${imagePaths.icon}/list-category.svg`}
          alt="List Category Icon"
        />
        <span>Category</span>
        <div>
          <Image
            width={10}
            height={6}
            src={`${imagePaths.icon}/arrow.svg`}
            alt="dropdown Arrow Icon"
          />
        </div>
      </div>
      {/* Middle */}
      <div className="flex flex-row justify-center w-full md:w-fit gap-5">
        <Link href="/">Home</Link>
        <Link href="/" className="flex flex-row gap-1 h-fit">
          New Products
          <span className="hidden md:flex w-fit py-1 px-3 rounded-full bg-orange text-white text-xs">
            NEW
          </span>
        </Link>
        <Link href="/" className="flex flex-row gap-1 h-fit">
          Promotions
          <span className="hidden md:flex w-fit py-1 px-3 rounded-full bg-orange text-white text-xs">
            HOT
          </span>
        </Link>
      </div>
      {/* Right */}
      <div className="hidden md:flex flex-row gap-5">
        <Link href="/" className="flex flex-row gap-2">
          <Image
            width={24}
            height={24}
            src={`${imagePaths.icon}/truck.svg`}
            alt="Truck Icon"
          />
          <span className="hidden lg:flex">Track Your Order</span>
        </Link>
        <Link href="/" className="flex flex-row gap-2">
          <Image
            width={24}
            height={24}
            src={`${imagePaths.icon}/user.svg`}
            alt="Truck Icon"
          />
          <span className="hidden lg:flex">Sign In/Register</span>
        </Link>
      </div>
    </nav>
  );
}
