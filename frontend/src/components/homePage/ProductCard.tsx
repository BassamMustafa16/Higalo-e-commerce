import Link from "next/link";
import ProductImage from "./ProductImage";
import { Product } from "@/types/db";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-[100%] bg-white rounded-2xl overflow-hidden h-fit">
      {/* Image */}
      <ProductImage product={product} />
      {/* Text Content */}
      <Link
        className="flex-1 md:flex-2 lg:flex-1"
        href={`product/${product.id}`}
      >
        <div className="flex flex-col gap-3 md:justify-center py-3 px-4  ">
          <p
            className={`${
              product.inventory === 0
                ? "sold-out"
                : product.aspects.ribbon && product.aspects.ribbon.toLowerCase()
            } w-fit px-3 py-1 text-sm rounded-sm`}
          >
            {product.inventory === 0 ? "Sold out" : product.aspects.ribbon}
          </p>
          <div className="flex flex-row md:flex-col gap-3 items-center md:items-start justify-between">
            <h3 className="font-semibold">{product.name}</h3>
            <div className="flex flex-col mr-5 w-fit items-center">
              <h4 className="font-semibold ">
                ${product.price.finalPrice.toFixed(2)}
              </h4>
              {product.price.originalPrice && (
                <del className="text-gray-500 text-sm ">
                  ${product.price.originalPrice?.toFixed(2)}
                </del>
              )}
            </div>
          </div>

          <p
            className="text-xs text-gray-500 w-full"
            dangerouslySetInnerHTML={{
              __html: product.description.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </Link>
    </div>
  );
}
