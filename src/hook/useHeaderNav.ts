import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useHeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const closeTimerRef = useRef<number | null>(null);
  const CLOSE_DELAY = 300;

  /* ================= 通用样式 ================= */
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

  /* ================= 滚动监听 ================= */
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

  /* ================= 产品跳转（🔥 你缺的就是这个） ================= */
  const goProduct = (slug: string) => {
    navigate(`/products/${slug}`);
    setProductMenuOpen(false);
    setMobileMenuOpen(false);
  };

  /* ================= 统一导出 ================= */
  return {
    mobileMenuOpen,
    productMenuOpen,
    scrolled,

    setMobileMenuOpen,
    setProductMenuOpen,

    navBtn,
    startCloseTimer,
    clearCloseTimer,

    scrollToSection,
    goProduct, // ✅ 一定要 return
  };
}
