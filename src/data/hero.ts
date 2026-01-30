// src/data/hero.ts
import { useEffect, useRef, useState } from 'react';
import { heroImages } from './imgInfo/imgInfo';
import { heroText } from './textInfo/mapInfo';
import { heroImageSwitchDelay } from './configInfo/configInfo';

export const heroData = {
  images: heroImages,
  text: heroText,
  autoplayInterval: heroImageSwitchDelay,
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




