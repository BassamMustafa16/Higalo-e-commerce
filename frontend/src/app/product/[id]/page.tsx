// src/app/products/[id]/page.tsx
import Slider from "@/components/productPage/Slider";
import fetchProduct from "@/lib/fetchProduct";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Amount from "@/components/productPage/Amount";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  // Fetch product details by id
  const product = await fetchProduct({ id });
  console.log(product);
  if (!product) return notFound();

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Slider */}
      <Slider
        images={[product.images.mainImage, ...product.images.moreImages]}
      />

      {/* Product Content */}
      <div className="flex flex-col gap-2">
        {/* Name */}
        <h1 className="text-xl font-semibold">{product.name}</h1>

        {/* Rating */}
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-3 w-2/3">
            {Array.from({ length: 5 }).map((_, i) => {
              const starValue = i + 1;
              if (product.roundedAverageRating >= starValue) {
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={["fas", "star"]}
                    className="text-orange"
                  />
                );
              } else if (product.roundedAverageRating >= starValue - 0.5) {
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={["fas", "star-half-stroke"]}
                    className="text-orange"
                  />
                );
              } else {
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={["far", "star"]}
                    className="text-orange"
                  />
                );
              }
            })}
          </div>
          <p className="w-fit text-gray-500 text-sm">{`(${product.ratingsCount}) review`}</p>
        </div>

        {/* Price */}
        <div className="flex flex-row items-center gap-5">
          <h2 className="font-semibold">
            ${product.price.finalPrice.toFixed(2)}
          </h2>
          {product.price.originalPrice && (
            <del className="text-sm text-gray-500">
              ${product.price.originalPrice.toFixed(2)}
            </del>
          )}{" "}
        </div>

        {/* Category */}
        <p>Category: {product.categoryName}</p>

        {/* Highlights */}
        {product.aspects.highlights && (
          <ul className="list-disc pl-5">
            {product.aspects.highlights.map((aspect, index) => (
              <li key={index}>{aspect}</li>
            ))}
          </ul>
        )}

        {/* Colors */}
        {product.aspects.colors && (
          <div className="flex flex-col gap-2">
            <h3>Colors: </h3>
            <div className="flex flex-row gap-3">
              {product.aspects.colors?.map((color: string, index: number) => (
                <div
                  key={index}
                  className={`w-8 aspect-square rounded-full`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Amount */}
      <Amount inStock={product.inventory}/>

      {/* Taps */}
      <div></div>
    </div>
  );
}
