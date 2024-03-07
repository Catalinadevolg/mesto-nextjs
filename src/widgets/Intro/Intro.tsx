'use client';

import { ArrowToRightIcon, Container, Logo, Marquee, Polygon, useAnimation } from '@/shared';
import styles from './Intro.module.scss';
import { useRef } from 'react';

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
  const ref = useRef<HTMLDivElement>(null);

  const { scrolledPart } = useAnimation(ref);

  return (
    <section className={styles.root}>
      <div
        ref={ref}
        className={styles['content-wrapper']}
        style={{ transform: `translateY(${OFFSET - scrolledPart * OFFSET}px)` }}
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
