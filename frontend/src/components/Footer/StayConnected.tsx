import Link from "next/link";
import imagePaths from "@/constants/imagePaths";
import Image from "next/image";
export default function StayConnected() {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <h3 className="text-orange font-semibold">Stay Connected</h3>
      <div className="flex flex-row items-center gap-3 text-white">
        <Link href="/">
          <Image
            src={`${imagePaths.icon}/footer-facebook.svg`}
            alt="Facebook Icon"
            width={10}
            height={19}
          />
        </Link>
        <Link href="/">
          <Image
            src={`${imagePaths.icon}/instagram.svg`}
            alt="Instagram Icon"
            width={19}
            height={19}
          />
        </Link>
        <Link href="/">
          <Image
            src={`${imagePaths.icon}/x.svg`}
            alt="Twitter X Icon"
            width={19}
            height={19}
          />
        </Link>
        <Link href="/">
          <Image
            src={`${imagePaths.icon}/footer-mail.svg`}
            alt="Mail Icon"
            width={19}
            height={19}
          />
        </Link>
      </div>
    </div>
  );
}
