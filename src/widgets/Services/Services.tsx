'use client';

import { ArrowIcon, Container, FireworkIcon, GlobeIcon } from '@/shared';
import styles from './Services.module.scss';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import cn from 'classnames';
import {
  ServicesItem,
  ServicesItemProps,
  SmallServiceItem,
  SmallServiceItemProps,
} from './components';

type ServiceType = 'business' | 'location';

const servicesInfo: ServicesItemProps[] = [
  {
    header: 'Исследования и анализ ',
    icon: <GlobeIcon />,
    title: 'Хорошее начало. ',
    description:
      'Комплексное погружение в контекст бизнеса, формирование цели и определение ключевых задач проекта',
    tags: [
      'Анализ бизнес-модели',
      'Анализ стейкхолдеров',
      'Коммуникационный аудит',
      'Анализ рынка и конкурентов',
      'Анализ медиаполя и имиджа',
      'Маркетинговое исследование',
    ],
    startOffset: -8,
    endOffset: 142,
  },
  {
    header: 'Брендинг и айдентика',
    icon: <FireworkIcon />,
    title: 'Единственно верный ход.',
    description:
      'Когда нужно отразить уникальный характер компании, ее ценности и  преимущества - все в запоминающихся образах для коммуникации с аудиторией',
    tags: [
      'Позиционирование ',
      'Характер и ценности бренда',
      'Логотип и фирменный стиль',
      'Брендбук',
    ],
    startOffset: 350,
    endOffset: 70,
  },
  {
    header: 'Стратегия и продвижение',
    icon: <ArrowIcon />,
    title: 'Правильное решение для роста.',
    description:
      'Когда пора заявить о себе и продумать все до мелочей: от стратегической цели до креативных постов в социальных сетях и публикаций в СМИ',
    tags: [
      'Постановка цели',
      'Коммуникационная стратегия',
      'Медиаплан',
      'Контент план',
      'Креативная концепция',
      'Копирайтинг',
      'Дизайн',
    ],
    startOffset: 100,
    endOffset: 190,
  },
];

const servicesShortInfo: SmallServiceItemProps[] = [
  {
    title: 'Разработка сайта',
    description: 'Когда пришла пора действовать, но не хватает самого главного',
  },
  {
    title: 'Обучение',
    description: 'Когда ваша цель - лично во всем разобраться и стать экспертом',
  },
  {
    title: 'Консультации',
    description: 'Когда хочется сделать своими руками, но остались важные вопросы',
  },
];

const PADDING_TOP_MAX = 350;
const PADDING_TOP_MIN = 190;

const Services = () => {
  const [selected, setSelected] = useState<ServiceType>('business');

  const [isVisible, setIsVisible] = useState(false);
  const [paddingTop, setPaddingTop] = useState(PADDING_TOP_MAX);

  const observerRef = useRef<HTMLUListElement>(null);

  const handleScroll = useCallback(() => {
    if (!observerRef.current) return;

    const elCoords = observerRef.current.getBoundingClientRect();
    const viewportHeight = document.documentElement.clientHeight;

    const scrolled = viewportHeight - elCoords.top;

    setPaddingTop(
      PADDING_TOP_MAX -
        (scrolled / (viewportHeight + elCoords.height)) * (PADDING_TOP_MAX - PADDING_TOP_MIN)
    );
  }, [observerRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '50px 0px 0px' }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [isVisible, observerRef]);

  useLayoutEffect(() => {
    if (!isVisible) return;

    handleScroll();
  }, [isVisible, handleScroll]);

  useEffect(() => {
    if (!isVisible) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, handleScroll]);

  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Услуги</h2>

          <div className={styles['header-right-block']}>
            <button
              type="button"
              className={cn(styles.tab, { [styles['tab__active']]: selected === 'business' })}
              onClick={() => setSelected('business')}
            >
              Для бизнеса
              <span
                className={cn(styles['tab-count'], {
                  [styles['tab-count__active']]: selected === 'business',
                })}
              >
                6
              </span>
            </button>

            <button
              type="button"
              className={cn(styles.tab, { [styles['tab__active']]: selected === 'location' })}
              onClick={() => setSelected('location')}
            >
              Для территории
              <span
                className={cn(styles['tab-count'], {
                  [styles['tab-count__active']]: selected === 'location',
                })}
              >
                6
              </span>
            </button>
          </div>
        </div>

        <div className={styles['services-list']}>
          <ul className={styles['services-list__list']}>
            {servicesInfo.map((i, idx) => (
              <ServicesItem
                key={idx}
                header={i.header}
                icon={i.icon}
                title={i.title}
                description={i.description}
                tags={i.tags}
                startOffset={i.startOffset}
                endOffset={i.endOffset}
              />
            ))}
          </ul>

          <ul
            ref={observerRef}
            className={cn(styles['services-list__list'], styles['margin-top-120'])}
            style={{ paddingTop: `${paddingTop}px` }}
          >
            {servicesShortInfo.map((i, idx) => (
              <SmallServiceItem key={idx} title={i.title} description={i.description} />
            ))}
          </ul>

          <div className={styles['button-wrapper']}>
            {/* <Button  text='Все услуги' onClick={() => console.log('button click')}/> */}
            <button type="button" className={styles['all-services-button']}>
              Все услуги
            </button>
          </div>

          <button type="button" className={styles['large-button']}>
            <span className={styles['large-button__text']}>Обсудить задачу</span>
          </button>
        </div>
      </Container>
    </section>
  );
};

export { Services };
