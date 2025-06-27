"use client"
import api from "@/lib/api";
export default function Test() {
  const fetchData = async () => {
    try {
      const res = await api.get("/");
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}
