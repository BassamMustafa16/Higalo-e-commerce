// src/app/products/[id]/page.tsx
import Slider from "@/components/productPage/Slider";
import fetchProduct from "@/lib/fetchProduct";
import { notFound } from "next/navigation";

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
      <Slider images={product.images} />

      {/* Product Content */}
      <div>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <p>Category: {product.category}</p>
        <ul className="list-disc pl-5">
          {product.aspects.map((aspect, index) => (
            <li key={index}>{aspect}</li>
          ))}
        </ul>
        <div className="flex flex-row gap-3">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`bg-[${color}] w-8 aspect-square rounded-full`}
            ></div>
          ))}
        </div>
      </div>

      {/* Taps */}
      <div></div>
    </div>
  );
}
