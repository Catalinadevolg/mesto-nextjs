import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface Props {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  text: string;
  onClick: () => void;
}

const Button = ({ type = 'button', text, onClick }: Props) => {
  return (
    <button type={type} className={styles.root} onClick={onClick}>
      {text}
    </button>
  );
};

export { Button };
