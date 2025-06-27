import Image from "next/image";
import imagePaths from "@/constants/imagePaths";
export default function Cart() {
  return (
    <div>
      <Image
        width={24}
        height={24}
        src={`${imagePaths.icon}/cart.svg`}
        alt="Cart icon"
        className="cursor-pointer"
      />
    </div>
  );
}
