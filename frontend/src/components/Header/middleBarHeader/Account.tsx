"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import imagePaths from "@/constants/imagePaths";
import { validateToken } from "@/lib/validateToken";

export default function Account() {
  const router = useRouter();
  const handleClick = () => {
    const validToken = validateToken();
    if (validToken) router.push("/account");
    else router.push("/login");
  };

  return (
    <div onClick={handleClick} aria-label="User">
      <Image
        width={24}
        height={24}
        src={`${imagePaths.icon}/user.svg`}
        alt="User icon"
      />
    </div>
  );
}
