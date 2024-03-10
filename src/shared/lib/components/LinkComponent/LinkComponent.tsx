import cn from 'classnames';
import styles from './LinkComponent.module.scss';
import Link from 'next/link';
import { LinkHTMLAttributes } from 'react';

interface Props extends LinkHTMLAttributes<HTMLLinkElement> {
  text: string;
  isLight?: boolean;
  isUppercase?: boolean;
  textClassName?: string;
}

const LinkComponent = ({ text, href = '/', isLight, isUppercase }: Props) => {
  return (
    <Link href={href} className={styles.root}>
      <span
        className={cn(styles['link__text'], styles['link__top'], {
          [styles['text-upper']]: isUppercase,
          [styles['light-text']]: isLight,
        })}
      >
        {text}
      </span>
      <span
        className={cn(styles['link__text'], styles['link__bottom'], {
          [styles['text-upper']]: isUppercase,
          [styles['light-text']]: isLight,
        })}
      >
        {text}
      </span>
    </Link>
  );
};

export { LinkComponent };
