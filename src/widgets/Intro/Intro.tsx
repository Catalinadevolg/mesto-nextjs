import { Container, Logo, Polygon } from '@/shared';
import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Агентство территориального брендинга </h1>

          <Logo classname={styles.logo} bigSize />
        </div>
      </Container>

      <div className={styles.bg}>
        <div className={styles.gradient}>
          <div className={styles['polygon-wrapper']}>
            <Polygon color="rgba(221, 201, 248, 1)" size="big" />
          </div>

          <div className={styles['polygon-wrapper']}>
            <Polygon color="rgba(221, 201, 248, 1)" size="big" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Intro };
