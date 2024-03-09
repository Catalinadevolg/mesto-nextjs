'use client';

import { Polygon, TRANSFORM_TYPE, getRandomInt } from '@/shared';
import styles from './Gradient.module.scss';
import cn from 'classnames';
import { useLayoutEffect, useState } from 'react';

const BG_COLORS = [
  'var(--yellow)',
  'var(--yellow-2)',
  'var(--yellow-3)',
  'var(--yellow-4)',
  'var(--yellow-5)',
  'var(--yellow-6)',
  'var(--purple)',
  'var(--purple-2)',
  'var(--purple-3)',
  'var(--purple-4)',
  'var(--purple-5)',
  'var(--purple-6)',
];

const ANIMATION_CLASSNAMES = [
  'animation__to-right',
  'animation__to-left',
  'animation__to-up',
  'animation__to-down',
];

interface PolygonInfo {
  top: string;
  left: string;
  color: string;
  animation: string;
  transformType: (typeof TRANSFORM_TYPE)[number];
}

const Gradient = () => {
  const [polygons, setPolygons] = useState<PolygonInfo[]>([]);

  useLayoutEffect(() => {
    setPolygons(
      Array.from({ length: 5 }).map(() => ({
        top: `${getRandomInt(0, 100)}%`,
        left: `${getRandomInt(0, 100)}%`,
        color: BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)],
        animation: ANIMATION_CLASSNAMES[Math.floor(Math.random() * ANIMATION_CLASSNAMES.length)],
        transformType: TRANSFORM_TYPE[Math.floor(Math.random() * TRANSFORM_TYPE.length)],
      }))
    );
  }, []);

  return (
    <div className={styles.gradient}>
      {polygons.map((p, idx) => (
        <div
          key={idx}
          className={cn(styles['polygon-wrapper'], styles[p.animation])}
          style={{
            top: p.top,
            left: p.left,
          }}
        >
          <Polygon
            color={p.color}
            size={idx > polygons.length / 2 ? 'small' : 'big'}
            transformType={p.transformType}
          />
        </div>
      ))}
    </div>
  );
};

export { Gradient };
