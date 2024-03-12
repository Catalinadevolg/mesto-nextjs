'use client';

import {
  ArrowIcon,
  Container,
  FireworkIcon,
  GlobeIcon,
  LinkComponent,
  useAnimation,
} from '@/shared';
import styles from './Services.module.scss';
import { useRef, useState } from 'react';
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

  const ref = useRef<HTMLUListElement>(null);

  const { scrolledPart } = useAnimation(ref);

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
          <ul
            className={cn(styles['services-list__list'], styles['services-list__big-items-list'])}
          >
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
            ref={ref}
            className={cn(styles['services-list__list'], styles['services-list__small-items-list'])}
            style={{
              paddingTop: `${PADDING_TOP_MAX - scrolledPart * (PADDING_TOP_MAX - PADDING_TOP_MIN)}px`,
            }}
          >
            {servicesShortInfo.map((i, idx) => (
              <SmallServiceItem key={idx} title={i.title} description={i.description} />
            ))}
          </ul>

          <div className={styles['link-wrapper']}>
            <LinkComponent text="Все услуги" isOutlined />
          </div>

          <button type="button" className={styles['custom-button']}>
            <span className={styles['custom-button__text']}>Обсудить задачу</span>
          </button>
        </div>
      </Container>
    </section>
  );
};

export { Services };
