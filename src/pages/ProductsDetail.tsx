import { NavLink, useParams } from "react-router-dom";
import { Hero } from "./Hero";
import { productParams } from "@/data/products";
import { productMap } from "@/data/textInfo/mapInfo";
import { textTitle } from "@/data/textInfo/headInfo";
import { textSolgan } from "@/data/textInfo/solganInfo";

export default function ProductsDetail() {
  const { slug } = useParams<{ slug: string }>();

  const currentCategory = productParams.find((c) => c.slug === slug);
  const products = productMap[slug || ""] || [];

  return (
    <>
    <Hero />
    <div className="flex min-h-screen bg-gray-50">
      {/* 左侧导航 */}
      <aside className="w-64 bg-white border-r px-6 py-8">
        <h2 className="mb-6 text-lg font-semibold">{textTitle.productsTitle}</h2>

        <nav className="space-y-2">
          {productParams.map((item) => (
            <NavLink
              key={item.slug}
              to={`/products/${item.slug}`}
              className={({ isActive }) =>
                `block rounded px-3 py-2 text-sm transition
                ${isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* 右侧产品区 */}
      <main className="flex-1 p-8">
        <h1 className="mb-6 text-2xl font-bold">
          {currentCategory?.title || "产品详情"}
        </h1>

        {products.length === 0 ? (
          <p className="text-gray-500">{textSolgan.productDetail}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-white shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover rounded-t-xl"
                />

                <div className="p-4">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
    </>
  );
}
