import RegisterForm from "@/components/registerPage/registerForm";

export default function RegisterPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col items-center justify-center w-full  py-5 md:py-10 bg-[#FCFCFC]">
      {/* Registerd Customers */}
      <div className="flex-1 flex flex-col gap-2 justify-center max-lg:max-w-sm items-center w-full text-left">
        <h2 className="text-lg lg:hidden text-left w-full font-semibold">Create An Account</h2>
        <RegisterForm />
      </div>
    </div>
  );
}
