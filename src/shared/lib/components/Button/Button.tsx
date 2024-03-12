import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLarge?: boolean;
  isOutlined?: boolean;
  isUppercase?: boolean;
  onClick?: () => void;
}

const Button = ({ type = 'button', text, isLarge, isUppercase, isOutlined, onClick }: Props) => {
  return (
    <button
      type={type}
      className={cn(styles.root, { [styles['button__outlined']]: isOutlined })}
      onClick={onClick}
    >
      <span
        className={cn(styles['button__text'], styles['button__top'], {
          [styles['text-upper']]: isUppercase,
          [cn(styles['button__padding'], styles['light-text'])]: isOutlined,
          [styles['standard-text']]: !isLarge,
          [styles['large-text']]: isLarge,
        })}
      >
        {text}
      </span>
      <span
        className={cn(styles['button__text'], styles['button__bottom'], {
          [styles['text-upper']]: isUppercase,
          [styles['button__padding']]: isOutlined,
          [styles['standard-text']]: !isLarge,
          [styles['large-text']]: isLarge,
          [styles['text-underline']]: !isOutlined,
        })}
      >
        {text}
      </span>
    </button>
  );
};

export { Button };
