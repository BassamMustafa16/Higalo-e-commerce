// src/app/products/[id]/page.tsx
import Slider from "@/components/productPage/Slider";
import fetchProduct from "@/lib/fetchProduct";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PreOrder from "@/components/productPage/PreOrder";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params Promise
  const { id } = await params;

  // Fetch product details by id
  const product = await fetchProduct({ id });
  console.log(product);
  if (!product) return notFound();

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-5 flex flex-col md:flex-row gap-5 md:gap-10">
      {/* Slider */}
      <Slider
        images={[product.images.mainImage, ...product.images.moreImages]}
      />

      {/* Product Content */}
      <div className="flex flex-col gap-5 text-sm lg:text-base max-w-sm w-full">
        {/* Name */}
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        {/* Rating */}
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-3">
            {Array.from({ length: 5 }).map((_, i) => {
              const starValue = i + 1;
              if (product.roundedAverageRating >= starValue) {
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={["fas", "star"]}
                    className="text-orange min-h-6"
                  />
                );
              } else if (product.roundedAverageRating >= starValue - 0.5) {
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={["fas", "star-half-stroke"]}
                    className="text-orange min-h-6"
                  />
                );
              } else {
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={["far", "star"]}
                    className="text-orange min-h-6"
                  />
                );
              }
            })}
          </div>
          <p className="w-fit text-gray-500 text-xs">{`(${product.ratingsCount}) review`}</p>
        </div>

        {/* Price */}
        <div className="flex flex-row items-center gap-5">
          <h2 className="font-semibold text-xl">
            ${product.price.finalPrice.toFixed(2)}
          </h2>
          {product.price.originalPrice && (
            <del className="text-sm text-gray-500">
              ${product.price.originalPrice.toFixed(2)}
            </del>
          )}{" "}
        </div>

        {/* Category */}
        <p className="">
          Category:{" "}
          <span className="text-[#479622] ml-3">{product.categoryName}</span>
        </p>

        {/* Highlights */}
        {product.aspects.highlights && (
          <ul className="list-disc pl-5">
            {product.aspects.highlights.map((aspect, index) => (
              <li key={index}>{aspect}</li>
            ))}
          </ul>
        )}

        {/* Preorder contents */}
        <div className="flex flex-col gap-3">
          
          <PreOrder inStock={product.inventory} aspects={product.aspects} />
        </div>
      </div>

      {/* Taps */}
      <div></div>
    </div>
  );
}
