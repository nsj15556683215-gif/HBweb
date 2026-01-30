import { Menu, X } from "lucide-react";
import { useHeaderNav } from "@/hook/useHeaderNav";
import { productParams } from "@/data/products";
import { textTitle } from "@/data/textInfo/headInfo";
import { headerNavText } from "@/data/textInfo/mapInfo";
import { logoImage } from "@/data/imgInfo/imgInfo";

export function Header() {
  const {
    mobileMenuOpen,
    productMenuOpen,
    scrolled,
    setMobileMenuOpen,
    setProductMenuOpen,
    navBtn,
    startCloseTimer,
    clearCloseTimer,
    scrollToSection,
    goProduct, // ✅ 从 hook 里拿
  } = useHeaderNav();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
      ${scrolled ? "bg-black/70 shadow-md" : "bg-transparent"}`}
    >
      <div className="flex h-20">
        {/* ================= Logo ================= */}
        <div className="bg-white flex items-center px-6">
          <button
            onClick={() => scrollToSection(headerNavText.logo.target)}
            className="flex items-center gap-4"
          >
            <img 
                src={ logoImage.src } 
                alt={ logoImage.alt } 
                className="h-8" 
            />
            <div>
              <h1 className="text-lg font-bold text-blue-400">
                { textTitle.cnCompanyTitle }
              </h1>
              <p className="text-xs text-blue-800">
                { textTitle.cnCompanyTitle }
              </p>
            </div>
          </button>
        </div>

        {/* ================= Navigation ================= */}
        <div className="flex-1">
          <div className="h-full px-6 flex items-center justify-end">
            {/* ===== PC 菜单 ===== */}
            <nav className="hidden md:flex gap-6 items-center">
              <button className={navBtn} onClick={() => scrollToSection(headerNavText.header.target)}>
                {headerNavText.header.label}
              </button>

              <button
                className={navBtn}
                onClick={() => scrollToSection(headerNavText.about.target)}
              >
                {headerNavText.about.label}
              </button>

              {/* ===== 产品中心 ===== */}
              <div
                className="relative"
                onMouseEnter={clearCloseTimer}
                onMouseLeave={startCloseTimer}
              >
                <button
                  onClick={() => setProductMenuOpen((v) => !v)}
                  className={`${navBtn} flex items-center gap-1`}
                >
                  {headerNavText.products.label}
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
                  {productParams.map((item) => (
                    <div
                      key={item.slug}
                      onClick={() => {
                        goProduct(item.slug); // ✅ 用 hook 的方法
                        setProductMenuOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={navBtn}
                onClick={() => scrollToSection(headerNavText.advantages.target)}
              >
                {headerNavText.advantages.label}
              </button>

              <button
                className={navBtn}
                onClick={() => scrollToSection(headerNavText.cases.target)}
              >
                {headerNavText.cases.label}
              </button>

              <button
                className={navBtn}
                onClick={() => scrollToSection(headerNavText.contact.target)}
              >
                {headerNavText.contact.label}
              </button>
            </nav>

            {/* ===== Mobile 菜单按钮 ===== */}
            <button
              className="md:hidden text-white ml-4"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
