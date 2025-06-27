import Link from "next/link";
export default function QuickLinks() {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <h3 className="text-orange font-semibold">Quick Links</h3>
      <div className="flex flex-col gap-3 text-white text-sm">
        
        <Link href="/" >Cart</Link>
        <Link href="/" >Best Seller</Link>
        <Link href="/" >Onsale</Link>
      </div>
    </div>
  );
}
