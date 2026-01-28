// src/data/hero.ts
import { useEffect, useRef, useState } from 'react';

export const heroData = {
  images: [
    '/img/hero/hero-1.jpg',
    '/img/hero/hero-2.jpg',
  ],

  autoplayInterval: 5000,

  text: {
    title: '专业 PVC 压延设备制造商',
    subtitle: '提供高效、稳定、智能的压延生产线解决方案',
    button: '立即咨询',
  },
};

export function heroTool(
  length: number,
  interval: number
) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopAutoPlay = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);
  };

  const prev = () => {
    stopAutoPlay();
    setIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
    startAutoPlay();
  };

  const next = () => {
    stopAutoPlay();
    setIndex((prev) => (prev + 1) % length);
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    index,
    prev,
    next,
  };
}




