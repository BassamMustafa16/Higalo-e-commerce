import imagePaths from "@/constants/imagePaths";
import Image from "next/image";
import Link from "next/link";

export default function BottomFooter() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between text-xs text-darkBlue px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-10">
      <p>Copyright 2025 © Higalo</p>
      <div className="flex flex-col md:flex-row items-center md:gap-5">
        <div>
          <Link href="/">Contact . </Link>
          <Link href="/"> Frequently asked Questions</Link>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div>
            <Image
              src={`${imagePaths.footer}/visa.svg`}
              alt="Visa Logo"
              width={60}
              height={24}
            />
          </div>
          <div>
            <Image
              src={`${imagePaths.footer}/mastercard.svg`}
              alt="Visa Logo"
              width={60}
              height={38}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
