"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import imagePaths from "@/constants/imagePaths";

import { useAuth } from "@/contexts/AuthContext";

export default function Account() {
  const { userName } = useAuth();
  const router = useRouter();
  const handleClick = () => {
    if (userName) router.push("/account");
    else router.push("/login");
  };

  return (
    <div
      onClick={handleClick}
      aria-label="User"
      className="cursor-pointer md:hidden"
    >
      <Image
        width={24}
        height={24}
        src={`${imagePaths.icon}/user.svg`}
        alt="User icon"
      />
    </div>
  );
}
