import { Product } from "@/types/db";
import axios from "axios";
export default async function fetchProduct({ id }: { id: string }) {
  let product: Product | null = null;
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
    );
    if (res.status === 404) {
      return;
    }
    product = res.data;
    return product;
  } catch (err) {
    console.log(`error - ${err}`);
    return;
  }

  if (!product) {
    return;
  }
}
