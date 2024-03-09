import cn from 'classnames';
import styles from './Polygon.module.scss';

export const TRANSFORM_TYPE = ['clockwise', 'counterclockwise'] as const;

interface Props {
  color: string;
  transformType: (typeof TRANSFORM_TYPE)[number];
  size?: 'big' | 'small';
}

const Polygon = ({ color, transformType, size = 'big' }: Props) => {
  return size === 'big' ? (
    <svg
      width={2475}
      height={454}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        styles.root,
        { [styles['rotate-clockwise']]: transformType === 'clockwise' },
        { [styles['rotate-counterclockwise']]: transformType === 'counterclockwise' }
      )}
    >
      <polygon points="0,5 2275,5 2475,454 200,454" fill={color} />
    </svg>
  ) : (
    <svg
      width={1458}
      height={267}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        styles.root,
        { [styles['rotate-clockwise']]: transformType === 'clockwise' },
        { [styles['rotate-counterclockwise']]: transformType === 'counterclockwise' }
      )}
    >
      <polygon points="0,5 1358,5 1458,267 100,267" fill={color} />
    </svg>
  );
};

export { Polygon };
