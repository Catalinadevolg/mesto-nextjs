'use client';

import { RefObject, useCallback, useEffect, useLayoutEffect, useState } from 'react';

export const useAnimation = (ref: RefObject<Element>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolledPart, setScrolledPart] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const elCoords = ref.current.getBoundingClientRect();
    const viewportHeight = document.documentElement.clientHeight;

    const scrolled = viewportHeight - elCoords.top;
    setScrolledPart(scrolled / (viewportHeight + elCoords.height));
  }, [ref]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '50px 0px 0px' }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible, ref]);

  useLayoutEffect(() => {
    if (!isVisible) return;

    handleScroll();
  }, [isVisible, handleScroll]);

  useEffect(() => {
    if (!isVisible) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, handleScroll]);

  return { scrolledPart };
};
