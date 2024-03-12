import { LogoBigSizeIcon, LogoIcon } from '@/shared';
import Link from 'next/link';
import styles from './Logo.module.scss';
import cn from 'classnames';

interface Props {
  clickable?: boolean;
  classname?: string;
  bigSize?: boolean;
}

const Logo = ({ clickable, classname, bigSize }: Props) => {
  return clickable ? (
    <Link href="/" className={cn(styles.root, classname)}>
      <LogoIcon />
    </Link>
  ) : (
    <div className={cn(styles.root, classname)}>{bigSize ? <LogoBigSizeIcon /> : <LogoIcon />}</div>
  );
};

export { Logo };
