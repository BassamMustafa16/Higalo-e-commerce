"use client"
import { useEffect } from "react";
import axios from "axios";

export default function Test() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/`
        );
        console.log("✅ Backend says:", res.data);
      } catch (err) {
        console.error("❌ Error fetching from backend:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Open your console to see the message from the backend.</p>
    </div>
  );
}
