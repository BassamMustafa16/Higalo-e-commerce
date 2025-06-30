"use client";
import { useRouter } from "next/navigation";
export default function AccountPage() {
  const router = useRouter();
  const userName = localStorage.getItem("firstName");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    router.push("/");
  };
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-5 items-center py-5">
      <h1>Hello - {userName}</h1>
      <button
        className="bg-darkBlue text-white py-2 px-4 font-semibold rounded-xl"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
