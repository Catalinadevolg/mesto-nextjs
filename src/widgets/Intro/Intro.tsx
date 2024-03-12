'use client';

import { ArrowToRightIcon, Container, Logo, Marquee, useAnimation } from '@/shared';
import styles from './Intro.module.scss';
import { useRef } from 'react';
import { Gradient } from './components';

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

const CONTENT_OFFSET = 400;

const Intro = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrolledPart } = useAnimation(ref);

  return (
    <section className={styles.root}>
      <div className={styles.bg}>
        <Gradient />
      </div>

      <div
        className={styles['content-wrapper']}
        style={{ transform: `translateY(${CONTENT_OFFSET - scrolledPart * CONTENT_OFFSET}px)` }}
      >
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>Агентство территориального брендинга </h1>

            <Logo classname={styles.logo} bigSize />
          </div>
        </Container>

        <Marquee ref={ref} containerClassName={styles['marquee-container']}>
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
    </section>
  );
};

export { Intro };
