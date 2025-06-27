import Link from "next/link";
export default function HigaloSite() {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <h3 className="text-orange font-semibold">Higalo Site</h3>
      <div className="flex flex-col gap-3 text-white text-sm">
        <Link href="/">عربي</Link>
        <Link href="/">Terms & Conditions</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
    </div>
  );
}
