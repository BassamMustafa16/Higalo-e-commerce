import axios from "axios";

export default async function fetchFavorites() {
  const res = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/favorite`);
  console.log(res);
}
