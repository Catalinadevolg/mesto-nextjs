import { ReactNode } from 'react';
import styles from './ServicesItem.module.scss';

export interface ServicesItemProps {
  header: string;
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const ServicesItem = ({ header, icon, title, description, tags }: ServicesItemProps) => {
  return (
    <li className={styles.root}>
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
    </li>
  );
};

export { ServicesItem };
