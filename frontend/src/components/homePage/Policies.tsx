import imagePaths from "@/constants/imagePaths";
import Image from "next/image";

export default function Policies() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col md:flex-row gap-5">
      {/* Shipping */}
      <div className="flex flex-col gap-3 justify-center items-center w-full border rounded-2xl border-[#ADADAD] py-5">
        {/* Image */}
        <div>
          <Image
            src={`${imagePaths.icon}/delivery.svg`}
            alt="Delivery Icon"
            width={84}
            height={84}
          />
        </div>
        {/* Text Content */}
        <h2 className="text-xl font-semibold">Free Shipping</h2>
        <p className="text-[#555555] text-center w-1/2 md:w-3/4">
          For invoices over $1.500
        </p>
      </div>
      {/* Cash Back */}
      <div className="flex flex-col gap-3 justify-center items-center w-full border rounded-2xl border-[#ADADAD] py-5">
        {/* Image */}
        <div>
          <Image
            src={`${imagePaths.icon}/money-back.svg`}
            alt="Cash Back Icon"
            width={84}
            height={84}
          />
        </div>
        {/* Text Content */}
        <h2 className="text-xl font-semibold">Cash Back</h2>
        <p className="text-[#555555]  text-center w-1/2 md:w-3/4">when paying for products via visa card</p>
      </div>
      {/* Support */}
      <div className="flex flex-col gap-3 justify-center items-center w-full border rounded-2xl border-[#ADADAD] py-5">
        {/* Image */}
        <div>
          <Image
            src={`${imagePaths.icon}/support.svg`}
            alt="Support Icon"
            width={84}
            height={84}
          />
        </div>
        {/* Text Content */}
        <h2 className="text-xl font-semibold">24/7 Support</h2>
        <p className="text-[#555555] text-center w-1/2 md:w-3/4">
          When somthing goes wrong
        </p>
      </div>
    </div>
  );
}
