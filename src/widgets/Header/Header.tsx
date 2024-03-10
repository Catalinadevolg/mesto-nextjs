'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Button, Logo } from '@/shared';

const Header = () => {
  const [y, setY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);

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

  return (
    <header className={cn(styles.root, { [styles['visible-header']]: scrollingUp === true })}>
      <Logo clickable />

      <nav className={styles.navigation}>
        <ul className={styles['nav-list']}>
          <li className={styles['nav-item']}>Услуги</li>
          <li className={styles['nav-item']}>Кейс</li>
          <li className={cn(styles['nav-item'], styles['margin-left'])}>Контакты</li>
        </ul>
      </nav>

      <Button text="Обсудить задачу" isOutlined />
    </header>
  );
};

export { Header };
