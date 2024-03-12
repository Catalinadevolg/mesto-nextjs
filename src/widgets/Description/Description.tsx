import { ArrowToRightIcon, EyeIcon, Marquee } from '@/shared';
import styles from './Description.module.scss';

const Description = () => {
  return (
    <section className={styles.root}>
      <div className={styles.description}>
        <div className={styles['description__content']}>
          <span className={styles['description__text']}>Мы создаем </span>

          <div className={styles['description__eye-icon-wrapper']}>
            <EyeIcon />
          </div>

          <span className={styles['description__text']}>
            {' '}
            уникальные бренды основываясь глубоком понимании потребителей
          </span>
        </div>
      </div>

      <Marquee containerClassName={styles['marquee-container']}>
        <ul className={styles['marquee__content-list']}>
          {Array.from({ length: 6 }).map((i, idx) => (
            <div key={idx} className={styles['marquee__list-item']}>
              <span>Место для экспертизы и творчества</span>

              <div className={styles['arrow-icon-wrapper']}>
                <ArrowToRightIcon />
              </div>
            </div>
          ))}
        </ul>
      </Marquee>
    </section>
  );
};

export { Description };
