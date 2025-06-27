"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Test() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        console.log("✅ Backend says:", res.data);
        setMessage(res.data);
      } catch (err) {
        console.error("❌ Error fetching from backend:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Your Backend Says {message}</p>
    </div>
  );
}
