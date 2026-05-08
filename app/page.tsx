import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-red-700">Hello world</h1>
      <Link href="/users">Users Page</Link>
      <br />
      <ProductCard />
    </main>
  );
}
