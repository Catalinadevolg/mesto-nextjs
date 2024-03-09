import { Gradient } from '../Intro/components';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.bg}>
        <Gradient />
      </div>
    </footer>
  );
};

export { Footer };
