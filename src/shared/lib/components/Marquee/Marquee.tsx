'use client';

import { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Marquee.module.scss';

interface Props {
  children: ReactNode;
  containerClassName: string;
}

const MAX_ROTATE_DEGREE = 5;
const ROTATE_DEGREE = 10;
const MAX_TRANSLATE_X_PERCENT = 17;

const Marquee = ({ children, containerClassName }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotate, setRotate] = useState(MAX_ROTATE_DEGREE);
  const [translateX, setTranslateX] = useState(-MAX_TRANSLATE_X_PERCENT);

  const marqueeRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!marqueeRef.current) return;

    const elCoords = marqueeRef.current.getBoundingClientRect();
    const viewportHeight = document.documentElement.clientHeight;

    const scrolled = viewportHeight - elCoords.top;

    setRotate(MAX_ROTATE_DEGREE - (scrolled / (viewportHeight + elCoords.height)) * ROTATE_DEGREE);
    setTranslateX(
      (scrolled / (viewportHeight + elCoords.height)) * MAX_TRANSLATE_X_PERCENT -
        MAX_TRANSLATE_X_PERCENT
    );
  }, [marqueeRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '20px' }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [isVisible, observerRef]);

  useLayoutEffect(() => {
    if (!isVisible) return;

    handleScroll();
  }, [isVisible, handleScroll]);

  useEffect(() => {
    if (!isVisible) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, handleScroll]);

  return (
    <div ref={observerRef} className={containerClassName}>
      <div
        ref={marqueeRef}
        className={styles.marquee}
        style={{ transform: `rotate(${rotate}deg) translateX(${translateX}%)` }}
      >
        {children}
      </div>
    </div>
  );
};

export { Marquee };
