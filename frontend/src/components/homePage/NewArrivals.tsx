import Link from "next/link";
import poroducts from "@/constants/products";
import ProductImage from "./ProductImage";
export default function NewArrivals() {
  const filterdProducts = poroducts.filter(
    (product) => product.ribbon === "New"
  );
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Heading */}
      <div className="flex flex-row justify-between">
        <h2 className="text-darkBlue md:text-xl lg:text-2xl font-semibold">
          New Arrivals
        </h2>
        {/* Navigators */}
        <div className="flex flex-row gap-4 items-center text-orange">
          <Link href="/">See all</Link>
        </div>
      </div>
      {/* Content */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filterdProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row gap-5 w-[100%] bg-white rounded-2xl h-fit"
          >
            {/* Image */}
            <ProductImage product={product} />
            {/* Text Content */}
            <div className="flex flex-col flex-1 md:flex-2 lg:flex-1 gap-3 md:justify-center pb-3 px-4  ">
              <p
                className={`${
                  product.inventory === 0
                    ? "sold-out"
                    : product.ribbon.toLowerCase()
                } w-fit px-3 py-1 text-sm rounded-sm`}
              >
                {product.inventory === 0 ? "Sold out" : product.ribbon}
              </p>
              <div className="flex flex-row md:flex-col gap-3 justify-between">
                <h3>{product.name}</h3>
                <h4 className="font-semibold mr-5">
                  ${product.price.toFixed(2)}
                </h4>
              </div>

              <p
                className="text-xs text-gray-500 w-full"
                dangerouslySetInnerHTML={{
                  __html: product.describtion.replace(/\n/g, "<br />"),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
