"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Category, Subcategories } from "@/types/db";

type CategoryContextType = {
  categories: Category[];
  subcategories: Subcategories[];
  loading: boolean;
  error: string | null;
};

const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  subcategories: [],
  loading: true,
  error: null,
});

export const useCategories = () => useContext(CategoryContext);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategories[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/category/get-all`
        );
        setCategories(res.data.categories);
        setSubcategories(res.data.subcategories);
      } catch (err: unknown) {
        if (err && typeof err === "object" && "message" in err) {
          setError(String((err as { message?: unknown }).message));
        } else {
          setError("Error fetching categories");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categories, subcategories, loading, error }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
