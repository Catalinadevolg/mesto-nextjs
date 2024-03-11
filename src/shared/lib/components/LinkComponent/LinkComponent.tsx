import cn from 'classnames';
import styles from './LinkComponent.module.scss';
import Link from 'next/link';
import { LinkHTMLAttributes } from 'react';

interface Props extends LinkHTMLAttributes<HTMLLinkElement> {
  text: string;
  isLight?: boolean;
  isOutlined?: boolean;
  isUppercase?: boolean;
}

const LinkComponent = ({ text, href = '/', isLight, isOutlined, isUppercase }: Props) => {
  return (
    <Link href={href} className={cn(styles.root, { [styles['link__outlined']]: isOutlined })}>
      <span
        className={cn(styles['link__text'], styles['link__top'], {
          [styles['text-upper']]: isUppercase,
          [styles['light-text']]: isLight,
          [cn(styles['link__padding'], styles['light-text'])]: isOutlined,
        })}
      >
        {text}
      </span>
      <span
        className={cn(styles['link__text'], styles['link__bottom'], {
          [styles['text-upper']]: isUppercase,
          [styles['light-text']]: isLight,
          [styles['link__padding']]: isOutlined,
          [styles['text-underline']]: !isOutlined,
        })}
      >
        {text}
      </span>
    </Link>
  );
};

export { LinkComponent };
