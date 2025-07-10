import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";

export const addFavorite = async (productId: string) => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Kindly login to start adding to favorites");
    throw new Error("No Token");
  }

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/favorite/add-favorite`,
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios error (can be network or server returned error)
      console.error("Axios error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to add to favorites.");
    } else {
      // Non-Axios error
      console.error("Unexpected error:", err);
      alert("Something went wrong.");
    }
    return;
  }
};

// Remove a favorite
export const removeFavorite = async (productId: string) => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Kindly login to start adding to favorites");
    throw new Error("No Token");;
  }
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/favorite/remove-favorite`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId },
      }
    );
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios error (can be network or server returned error)
      console.error("Axios error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to remove to favorites.");
    } else {
      // Non-Axios error
      console.error("Unexpected error:", err);
      alert("Something went wrong.");
    }
    return;
  }
};
