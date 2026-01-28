import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/button';
import { heroData, heroTool} from '../data/hero';

export function Hero() {
  const { images, autoplayInterval, text } = heroData;

  const { index, prev, next } = heroTool(
    images.length,
    autoplayInterval
  );

  const scrollToContact = () => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
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
        onClick={prev}
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
        onClick={next}
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
          {text.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          {text.subtitle}
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {text.button}
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
}
