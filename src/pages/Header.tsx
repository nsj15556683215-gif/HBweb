import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 675);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-colors duration-300
        ${scrolled ? 'bg-black/60 shadow-md' : 'bg-transparent'}
      `}
    >
      {/* 整行布局 */}
      <div className="flex h-20">
        {/* 左侧白底（从浏览器最左边开始） */}
        <div className="bg-white flex items-center px-6">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-4 text-left focus:outline-none"
          >
            <img
              src="/logo.svg"
              alt="华博机械 Logo"
              className="h-8 w-auto"
            />
            <div className="leading-tight">
              <h1 className="text-lg font-bold text-blue-400">
                海宁市华博机械有限公司
              </h1>
              <p className="text-xs text-blue-800">
                Haining Huabo Machinery Co., Ltd.
              </p>
            </div>
          </button>
        </div>

        {/* 右侧导航区域（居中宽度） */}
        <div className="flex-1">
          <div className="max-w-8xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-end">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {[
                ['home', '首页'],
                ['about', '公司简介'],
                ['products', '产品中心'],
                ['advantages', '技术优势'],
                ['cases', '案例展示'],
                ['contact', '联系我们'],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white ml-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/80 px-6 py-4 space-y-2">
          {[
            ['home', '首页'],
            ['about', '公司简介'],
            ['products', '产品中心'],
            ['advantages', '技术优势'],
            ['cases', '案例展示'],
            ['contact', '联系我们'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left py-2 text-white hover:text-blue-400 transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
