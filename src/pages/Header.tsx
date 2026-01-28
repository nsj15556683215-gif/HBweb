import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const productCategories = [
  { name: "自动计量系统", slug: "auto-dosing" },
  { name: "高速混合机", slug: "super-mixer" },
  { name: "冷却搅拌机", slug: "cooling-mixer" },
  { name: "万马力机", slug: "banbury-machine" },
  { name: "轧轮机", slug: "mixing-roll" },
  { name: "过滤机", slug: "strainer" },
  { name: "压延主机", slug: "calender" },
  { name: "压延后端设备", slug: "post-calender" },
  { name: "卷取机", slug: "winder" },
  { name: "贴合机", slug: "laminating-machine" },
  { name: "行星挤出机", slug: "planetary-extruder" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const closeTimerRef = useRef<number | null>(null);
  const CLOSE_DELAY = 300;

  /* ================= 通用样式（关键） ================= */

  const navBtn =
    "text-white transition-colors duration-200 hover:text-blue-400 active:text-blue-400";

  /* ================= 下拉菜单关闭计时 ================= */

  const startCloseTimer = () => {
    if (closeTimerRef.current) return;
    closeTimerRef.current = window.setTimeout(() => {
      setProductMenuOpen(false);
      closeTimerRef.current = null;
    }, CLOSE_DELAY);
  };

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  /* ================= 滚动监听（仅背景） ================= */

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 675);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= 页面内滚动 ================= */

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  /* ================= 渲染 ================= */

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
      ${scrolled ? "bg-black/70 shadow-md" : "bg-transparent"}`}
    >
      <div className="flex h-20">
        {/* Logo */}
        <div className="bg-white flex items-center px-6">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-4"
          >
            <img src="/img/header/logo.svg" alt="Logo" className="h-8" />
            <div>
              <h1 className="text-lg font-bold text-blue-400">
                海宁市华博机械有限公司
              </h1>
              <p className="text-xs text-blue-800">
                Haining Huabo Machinery Co., Ltd.
              </p>
            </div>
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1">
          <div className="h-full px-6 flex items-center justify-end">
            <nav className="hidden md:flex gap-6 items-center">
              <button
                className={navBtn}
                onClick={() => scrollToSection("home")}
              >
                首页
              </button>

              <button
                className={navBtn}
                onClick={() => scrollToSection("about")}
              >
                公司简介
              </button>

              {/* 产品中心 */}
              <div
                className="relative"
                onMouseEnter={clearCloseTimer}
                onMouseLeave={startCloseTimer}
              >
                <button
                  onClick={() => setProductMenuOpen((v) => !v)}
                  className={`${navBtn} flex items-center gap-1`}
                >
                  产品中心
                </button>

                <div
                  className={`
                    absolute top-full left-0 mt-2 w-56 rounded-lg
                    bg-white shadow-lg py-2 z-50 text-black
                    transition-all duration-200
                    ${
                      productMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }
                  `}
                >
                  {productCategories.map((item) => (
                    <div
                      key={item.slug}
                      onClick={() => {
                        navigate(`/products/${item.slug}`);
                        setProductMenuOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={navBtn}
                onClick={() => scrollToSection("advantages")}
              >
                技术优势
              </button>

              <button
                className={navBtn}
                onClick={() => scrollToSection("cases")}
              >
                案例展示
              </button>

              <button
                className={navBtn}
                onClick={() => scrollToSection("contact")}
              >
                联系我们
              </button>
            </nav>

            {/* Mobile */}
            <button
              className="md:hidden text-white ml-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
