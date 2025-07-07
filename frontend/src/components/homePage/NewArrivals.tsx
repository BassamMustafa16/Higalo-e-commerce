"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types/db";
import Loader from "../loaders/Loader";
import ProductCard from "./ProductCard";

export default function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchNewArrivals() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products/new-arrivals`
        );
        if (res.status === 200) setNewArrivals(Array.from(res.data));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchNewArrivals();
  }, [newArrivals]);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#F7F7F7] py-5">
      {/* Loading */}
      {loading && <Loader />}

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
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
