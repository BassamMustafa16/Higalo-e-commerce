"use client";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function FavoritePage() {
  const { userId } = useAuth();
  if (!userId)
    return (
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-5">
        <div>
          {!userId && (
            <div className="flex flex-col items-center gap-5">
              <p>Please login to see your favorites</p>
              <div className="text-white">
                <Link
                  href="/login"
                  className="bg-orange px-3 py-1 rounded-md text-white "
                >
                  Login Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  else {
    
    return <div></div>;
  }
}
