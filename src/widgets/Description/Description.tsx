import { ArrowToRightIcon, EyeIcon, Marquee } from '@/shared';
import styles from './Description.module.scss';

const Description = () => {
  return (
    <section className={styles.root}>
      <div className={styles.description}>
        <p className={styles.content}>
          <span className={styles.text}>Мы создаем </span>
          <EyeIcon />
          <span className={styles.text}>
            {' '}
            уникальные бренды основываясь глубоком понимании потребителей
          </span>
        </p>
      </div>

      <Marquee containerClassName={styles['marquee-container']}>
        <div className={styles['marquee-content']}>
          {Array.from({ length: 6 }).map((i, idx) => (
            <div key={idx} className={styles['marquee-content__wrapper']}>
              <span>Место для экспертизы и творчества</span>

              <div className={styles['arrow-icon-wrapper']}>
                <ArrowToRightIcon />
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export { Description };
