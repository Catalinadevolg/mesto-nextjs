import styles from './Polygon.module.scss';

interface Props {
  color: string;
  size?: 'big' | 'small';
}

const Polygon = ({ color, size = 'big' }: Props) => {
  return size === 'big' ? (
    <svg width={2475} height={454} xmlns="http://www.w3.org/2000/svg" className={styles.root}>
      <polygon points="0,5 2375,5 2475,454 100,454" fill={color} />
    </svg>
  ) : (
    <svg width={1458} height={267} xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,5 1358,5 1458,267 100,267" fill={color} />
    </svg>
  );
};

export { Polygon };
