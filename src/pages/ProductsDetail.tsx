import { NavLink, useParams } from "react-router-dom";
import { Hero } from "./Hero";
import { product_param } from "@/data/products";


// 👉 按分类分组的产品数据
type ProductCard = {
  id: string;
  title: string;
  image: string;
  desc: string;
};

const productMap: Record<string, ProductCard[]> = {
  "auto-dosing": [
    {
      id: "ad-01",
      title: "自动计量系统 A1（AD-100）",
      image: "/images/auto-dosing-1.jpg",
      desc: "功率 5kW，计量精度 ±0.1%，适合常规自动配料产线。",
    },
    {
      id: "ad-02",
      title: "自动计量系统 A2（AD-200）",
      image: "/images/auto-dosing-2.jpg",
      desc: "功率 7.5kW，计量精度 ±0.05%，适合中高精度配料。",
    },
    {
      id: "ad-03",
      title: "自动计量系统 A3（AD-300）",
      image: "/images/auto-dosing-3.jpg",
      desc: "功率 11kW，计量精度 ±0.03%，用于高端自动化产线。",
    },
  ],

  "super-mixer": [
    {
      id: "sm-01",
      title: "高速混合机 S1（SM-500）",
      image: "/images/super-mixer-1.jpg",
      desc: "功率 37kW，产能 500kg/h，适用于粉体高速混合。",
    },
    {
      id: "sm-02",
      title: "高速混合机 S2（SM-800）",
      image: "/images/super-mixer-2.jpg",
      desc: "功率 55kW，产能 800kg/h，混合效率高。",
    },
    {
      id: "sm-03",
      title: "高速混合机 S3（SM-1000）",
      image: "/images/super-mixer-3.jpg",
      desc: "功率 75kW，产能 1000kg/h，适合大型生产线。",
    },
  ],

  "cooling-mixer": [
    {
      id: "cm-01",
      title: "冷却搅拌机 C1（CM-600）",
      image: "/images/cooling-mixer-1.jpg",
      desc: "功率 22kW，产能 600kg/h，快速冷却物料。",
    },
    {
      id: "cm-02",
      title: "冷却搅拌机 C2（CM-800）",
      image: "/images/cooling-mixer-2.jpg",
      desc: "功率 30kW，产能 800kg/h，适合连续生产。",
    },
  ],

  "banbury-machine": [
    {
      id: "bb-01",
      title: "万马力密炼机 B1（BB-75）",
      image: "/images/banbury-1.jpg",
      desc: "功率 250kW，容积 75L，适合中型橡塑混炼。",
    },
    {
      id: "bb-02",
      title: "万马力密炼机 B2（BB-110）",
      image: "/images/banbury-2.jpg",
      desc: "功率 355kW，容积 110L，高强度混炼能力。",
    },
    {
      id: "bb-03",
      title: "万马力密炼机 B3（BB-160）",
      image: "/images/banbury-3.jpg",
      desc: "功率 500kW，容积 160L，适合重载连续生产。",
    },
  ],

  "mixing-roll": [
    {
      id: "mr-01",
      title: "轧轮机 R1（MR-18）",
      image: "/images/mixing-roll-1.jpg",
      desc: "功率 45kW，辊径 18 英寸，适合精炼加工。",
    },
    {
      id: "mr-02",
      title: "轧轮机 R2（MR-22）",
      image: "/images/mixing-roll-2.jpg",
      desc: "功率 75kW，辊径 22 英寸，产能更高。",
    },
  ],

  "strainer": [
    {
      id: "st-01",
      title: "过滤机 F1（ST-120）",
      image: "/images/strainer-1.jpg",
      desc: "功率 30kW，处理能力 120kg/h，过滤精度高。",
    },
    {
      id: "st-02",
      title: "过滤机 F2（ST-200）",
      image: "/images/strainer-2.jpg",
      desc: "功率 45kW，处理能力 200kg/h，适合连续过滤。",
    },
  ],

  "calender": [
    {
      id: "ca-01",
      title: "四辊压延主机（CA-34）",
      image: "/images/calender-1.jpg",
      desc: "功率 160kW，工作幅宽 1400mm。",
    },
    {
      id: "ca-02",
      title: "五辊压延主机（CA-42）",
      image: "/images/calender-2.jpg",
      desc: "功率 220kW，工作幅宽 1800mm。",
    },
    {
      id: "ca-03",
      title: "六辊压延主机（CA-52）",
      image: "/images/calender-3.jpg",
      desc: "功率 315kW，工作幅宽 2200mm。",
    },
  ],

  "post-calender": [
    {
      id: "pc-01",
      title: "冷却定型机（PC-01）",
      image: "/images/post-calender-1.jpg",
      desc: "功率 18kW，压延生产线后端冷却定型。",
    },
    {
      id: "pc-02",
      title: "牵引收卷装置（PC-02）",
      image: "/images/post-calender-2.jpg",
      desc: "功率 22kW，与压延主机联动运行。",
    },
  ],

  "winder": [
    {
      id: "wd-01",
      title: "卷取机 W1（WD-800）",
      image: "/images/winder-1.jpg",
      desc: "功率 15kW，卷取宽度 800mm。",
    },
    {
      id: "wd-02",
      title: "卷取机 W2（WD-1200）",
      image: "/images/winder-2.jpg",
      desc: "功率 22kW，卷取宽度 1200mm。",
    },
  ],

  "laminating-machine": [
    {
      id: "lm-01",
      title: "贴合机 L1（LM-1000）",
      image: "/images/laminating-1.jpg",
      desc: "功率 30kW，贴合宽度 1000mm。",
    },
    {
      id: "lm-02",
      title: "贴合机 L2（LM-1600）",
      image: "/images/laminating-2.jpg",
      desc: "功率 45kW，贴合宽度 1600mm。",
    },
  ],

  "planetary-extruder": [
    {
      id: "pe-01",
      title: "行星挤出机 P1（PE-90）",
      image: "/images/planetary-1.jpg",
      desc: "功率 110kW，产能 300kg/h，适合中小产线。",
    },
    {
      id: "pe-02",
      title: "行星挤出机 P2（PE-120）",
      image: "/images/planetary-2.jpg",
      desc: "功率 160kW，产能 500kg/h，稳定高效。",
    },
    {
      id: "pe-03",
      title: "行星挤出机 P3（PE-150）",
      image: "/images/planetary-3.jpg",
      desc: "功率 220kW，产能 800kg/h，重载工业级。",
    },
  ],
};


export default function ProductsDetail() {
  const { slug } = useParams<{ slug: string }>();

  const currentCategory = product_param.find((c) => c.slug === slug);
  const products = productMap[slug || ""] || [];

  return (
    <>
    <Hero />
    <div className="flex min-h-screen bg-gray-50">
      {/* 左侧导航 */}
      <aside className="w-64 bg-white border-r px-6 py-8">
        <h2 className="mb-6 text-lg font-semibold">产品中心</h2>

        <nav className="space-y-2">
          {product_param.map((item) => (
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
          <p className="text-gray-500">该分类暂无产品</p>
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
