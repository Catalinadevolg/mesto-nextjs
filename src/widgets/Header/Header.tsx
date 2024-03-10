'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import { BurgerIcon, Button, LinkComponent, Logo } from '@/shared';

const Header = () => {
  const [y, setY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (y > window.scrollY) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }

      setY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [y, scrollingUp]);

  const handleMobileButtonClick = () => {
    setIsOpened(prev => !prev);
  };

  return (
    <header className={cn(styles.root, { [styles['visible-header']]: scrollingUp === true })}>
      <div className={styles['header__mobile-content']}>
        <Logo clickable />

        <button
          type="button"
          className={cn(styles['mobile-button'], { [styles['mobile-button__cross']]: isOpened })}
          onClick={handleMobileButtonClick}
        >
          <BurgerIcon />
        </button>
      </div>

      <nav className={cn(styles.navigation, { [styles['nav__opened']]: isOpened })}>
        <ul className={styles['nav-list']}>
          <li className={styles['nav-item']}>
            <LinkComponent text="Услуги" isLight />
          </li>

          <li className={styles['nav-item']}>
            <LinkComponent text="Кейс" isLight />
          </li>

          <li className={cn(styles['nav-item'], styles['margin-left'])}>
            <LinkComponent text="Контакты" isLight />
          </li>
        </ul>

        <Button text="Обсудить задачу" isOutlined />
      </nav>
    </header>
  );
};

export { Header };
