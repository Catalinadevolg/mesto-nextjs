'use client';

import { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './ServicesItem.module.scss';
import Link from 'next/link';

export interface ServicesItemProps {
  header: string;
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  startOffset: number;
  endOffset: number;
}

const ServicesItem = ({
  header,
  icon,
  title,
  description,
  tags,
  startOffset,
  endOffset,
}: ServicesItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [translateY, setTranslateY] = useState(startOffset);

  const ref = useRef<HTMLLIElement>(null);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const elCoords = ref.current.getBoundingClientRect();
    const viewportHeight = document.documentElement.clientHeight;

    const scrolled = viewportHeight - elCoords.top;
    setTranslateY(
      startOffset - (scrolled / (viewportHeight + elCoords.height)) * (startOffset - endOffset)
    );
  }, [ref, startOffset, endOffset]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '20px' }
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

  return (
    <li ref={ref} className={styles.root} style={{ transform: `translateY(${translateY}px)` }}>
      <Link href="/" className={styles['item-container']}>
        <div className={styles['top-block']}>
          <h3 className={styles.header}>{header}</h3>
          <div className={styles['icon-wrapper']}>{icon}</div>
        </div>

        <div className={styles['bottom-block']}>
          <p className={styles.title}>{title}</p>

          <p className={styles.description}>{description}</p>

          <ul className={styles['tags-wrapper']}>
            {tags.map((t, idx) => (
              <li key={idx} className={styles.tag}>
                {t}
              </li>
            ))}
          </ul>

          <div className={styles['dots-wrapper']}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export { ServicesItem };
