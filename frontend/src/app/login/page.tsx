import LoginForm from "@/components/loginPage/loginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col  lg:flex-row gap-5 items-center lg:items-start lg:justify-between py-5 md:py-10 bg-[#FCFCFC]">
      
      {/* Registerd Customers */}
      <div className="flex-1 flex flex-col gap-2 max-w-sm w-full text-left">
        <h2 className="text-lg font-semibold">Registerd Customers</h2>
        <p className="text-sm">
          If you have an account, sign in with your email address.
        </p>
        <LoginForm />
      </div>

      {/* New Customers */}
      <div className="flex-1 hidden lg:flex flex-col gap-2 lg:gap-5 max-w-sm w-full text-left">
        <h2 className="text-lg font-semibold">New Customers</h2>
        <p className="text-sm">
          Creating an account has many benefits: check out faster, keep more
          than one address, track orders and more.
        </p>
        <Link href="/register" className="w-full">
          <button className="bg-orange text-white py-2 px-4 font-semibold text-sm rounded-md w-full cursor-pointer">
            Create An Account
          </button>
        </Link>
      </div>
    </div>
  );
}
