import Category from "@/components/Category";
import Product from "@/components/Product";

export default function Home() {
  return (
    <main className="min-h-screen bg-violet-200">
      <div>
        <Category />
        <div>
          <Product />
        </div>
      </div>
    </main>
  );
}
