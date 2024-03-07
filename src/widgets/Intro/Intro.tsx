'use client';

import { ArrowToRightIcon, Container, Logo, Marquee, Polygon } from '@/shared';
import styles from './Intro.module.scss';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const MARQUEE_CONTENT = [
  'бизнеса',
  'города',
  'человека',
  'бренда',
  'идеи',
  'будущего',
  'роста',
  'успеха',
  'шага вперед',
];

const OFFSET = 400;

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [translateY, setTranslateY] = useState(OFFSET);

  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const elCoords = ref.current.getBoundingClientRect();
    const viewportHeight = document.documentElement.clientHeight;

    const scrolled = viewportHeight - elCoords.top;
    setTranslateY(OFFSET - (scrolled / (viewportHeight + elCoords.height)) * OFFSET);
  }, [ref]);

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
    <section className={styles.root}>
      <div
        ref={ref}
        className={styles['content-wrapper']}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>Агентство территориального брендинга </h1>

            <Logo classname={styles.logo} bigSize />
          </div>
        </Container>

        <Marquee containerClassName={styles['marquee-container']}>
          <div className={styles['marquee-content']}>
            {MARQUEE_CONTENT.map((w, idx) => (
              <div key={idx} className={styles['marquee__item']}>
                <div className={styles['marquee__text']}>
                  <span className={styles['marquee__text-circled']}>Для</span>

                  <span className={styles['marquee__text-large']}>{w}</span>
                </div>

                <div className={styles['marquee__icon-wrapper']}>
                  <ArrowToRightIcon />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <div className={styles.bg}>
        <div className={styles.gradient}>
          <div className={styles['polygon-wrapper']}>
            <Polygon color="rgba(221, 201, 248, 1)" size="big" />
          </div>

          <div className={styles['polygon-wrapper']}>
            <Polygon color="rgba(221, 201, 248, 1)" size="big" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Intro };
