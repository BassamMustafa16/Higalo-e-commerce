import Image from "next/image";
import imagePaths from "@/constants/imagePaths";
import categories from "@/constants/categories";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Heading */}
      <div className="flex flex-row justify-between">
        <h2 className="text-darkBlue md:text-xl lg:text-2xl font-semibold">
          Shop By Categories
        </h2>
        {/* Navigators */}
        <div className="flex flex-row gap-4 items-center text-orange">
          <Link href="/">See all</Link>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-row md:grid md:grid-cols-4 gap-6 mt-5 overflow-auto">
        {categories.slice(0, 8).map((category) => (
          <Link key={category.id} href="/">
            <div className="relative max-md:w-[40vw]  aspect-square rounded-lg overflow-hidden flex items-end">
              <Image
                src={`${imagePaths.categories}/${category.name}.png`}
                alt={category.name}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
