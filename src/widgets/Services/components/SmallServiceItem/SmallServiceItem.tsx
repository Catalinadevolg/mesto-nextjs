import { StarIcon } from '@/shared';
import styles from './SmallServiceItem.module.scss';
import Link from 'next/link';

export interface SmallServiceItemProps {
  title: string;
  description: string;
}

const SmallServiceItem = ({ title, description }: SmallServiceItemProps) => {
  return (
    <li>
      <Link href="/" className={styles.root}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        <div className={styles['icon-wrapper']}>
          <StarIcon />
        </div>
      </Link>
    </li>
  );
};

export { SmallServiceItem };
