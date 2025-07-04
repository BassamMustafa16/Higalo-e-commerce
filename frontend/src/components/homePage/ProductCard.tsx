import Link from "next/link";
import ProductImage from "./ProductImage";
import { Product } from "@/types/db";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`product/${product.id}`} >
      <div className="flex flex-col md:flex-row gap-5 w-[100%] bg-white rounded-2xl overflow-hidden h-fit">
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
            <h4 className="font-semibold mr-5">${product.price.toFixed(2)}</h4>
          </div>

          <p
            className="text-xs text-gray-500 w-full"
            dangerouslySetInnerHTML={{
              __html: product.description.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </div>
    </Link>
  );
}
