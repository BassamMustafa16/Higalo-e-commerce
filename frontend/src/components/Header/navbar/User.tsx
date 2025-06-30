"use client";
import Image from "next/image";
import imagePaths from "@/constants/imagePaths";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
export default function User() {
  const router = useRouter();
  const { userName } = useAuth();
  const handleClick = () => {
    if (userName) router.push("/account");
    else router.push("/login");
  };
  return (
    <div onClick={handleClick} className="flex flex-row gap-2">
      <Image
        width={24}
        height={24}
        src={`${imagePaths.icon}/user.svg`}
        alt="User Icon"
      />
      <span className="hidden lg:flex">
        {userName ? userName : "Sign In/Register"}
      </span>
    </div>
  );
}
