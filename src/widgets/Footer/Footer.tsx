import { Gradient } from '../Intro/components';
import styles from './Footer.module.scss';
import { Button, Container, LinkComponent } from '@/shared';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.bg}>
        <Gradient />
      </div>

      <div className={styles['content-wrapper']}>
        <Container>
          <div className={styles.content}>
            <div className={styles['content__top-block']}>
              <div className={styles.contacts}>
                <LinkComponent text="+79856402997" href="tel:+79856402997" />

                <LinkComponent
                  text="contact@brandmesta.ru"
                  href="mailto:contact@brandmesta.ru"
                  isUppercase
                />
              </div>

              <div className={styles.links}>
                <ul className={styles['links__column']}>
                  <span className={styles['footer-text']}>Все права защищены ©2023</span>

                  <LinkComponent text="Политика конфиденциальности" />

                  <LinkComponent text="Политика cookie" />
                </ul>

                <ul className={styles['links__column']}>
                  <LinkComponent text="Дизайн Friend Lee" />

                  <LinkComponent
                    text="Разработано by Catalinadevolg"
                    href="https://github.com/Catalinadevolg"
                  />
                </ul>
              </div>
            </div>

            <Button text="Обсудить задачу" isLarge isUppercase />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export { Footer };
