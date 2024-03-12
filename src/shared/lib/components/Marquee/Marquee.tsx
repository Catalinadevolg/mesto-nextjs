'use client';

import { forwardRef, ReactNode, useRef } from 'react';
import styles from './Marquee.module.scss';
import { useAnimation } from '../../hooks';

interface Props {
  children: ReactNode;
  containerClassName: string;
}

const MAX_ROTATE_DEGREE = 5;
const ROTATE_DEGREE = 10;
const MAX_TRANSLATE_X_PERCENT = 17;

const Marquee = forwardRef<HTMLDivElement, Props>(
  ({ children, containerClassName }, containerRef) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrolledPart } = useAnimation(ref);

    return (
      <div ref={containerRef} className={containerClassName}>
        <div
          ref={ref}
          className={styles.marquee}
          style={{
            transform: `rotate(${MAX_ROTATE_DEGREE - scrolledPart * ROTATE_DEGREE}deg) translateX(${scrolledPart * MAX_TRANSLATE_X_PERCENT - MAX_TRANSLATE_X_PERCENT}%)`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

export { Marquee };
