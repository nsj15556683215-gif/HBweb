import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/button';
import { useEffect, useState, useRef } from 'react';

export function Hero() {
  const images = ['/header-1.jpg', '/header-2.jpg'];
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const prevImage = () => {
    stopAutoPlay();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startAutoPlay();
  };

  const nextImage = () => {
    stopAutoPlay();
    setIndex((prev) => (prev + 1) % images.length);
    startAutoPlay();
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
    >
      {/* 背景 */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 左按钮 */}
      <button
        onClick={prevImage}
        className="
          absolute left-6 top-1/2 -translate-y-1/2 z-20
          w-16 h-24 rounded-md
          bg-black/40 hover:bg-black/60
          flex items-center justify-center transition
        "
      >
        <ChevronLeft size={44} strokeWidth={3} />
      </button>

      {/* 右按钮 */}
      <button
        onClick={nextImage}
        className="
          absolute right-6 top-1/2 -translate-y-1/2 z-20
          w-16 h-24 rounded-md
          bg-black/40 hover:bg-black/60
          flex items-center justify-center transition
        "
      >
        <ChevronRight size={44} strokeWidth={3} />
      </button>

      {/* 文案 */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl mb-6">
          专业 PVC 压延设备制造商
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          提供高效、稳定、智能的压延生产线解决方案
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700"
        >
          立即咨询 <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
}
