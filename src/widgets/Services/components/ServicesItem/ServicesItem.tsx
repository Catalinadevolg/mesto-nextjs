'use client';

import { ReactNode, useRef } from 'react';
import styles from './ServicesItem.module.scss';
import Link from 'next/link';
import { useAnimation } from '@/shared';

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
  const ref = useRef<HTMLLIElement>(null);

  const { scrolledPart } = useAnimation(ref);

  return (
    <li
      ref={ref}
      className={styles.root}
      style={{
        transform: `translateY(${startOffset - scrolledPart * (startOffset - endOffset)}px)`,
      }}
    >
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
