import cn from 'classnames';
import styles from './Polygon.module.scss';

export const TRANSFORM_TYPE = ['clockwise', 'counterclockwise'] as const;

interface Props {
  color: string;
  transformType: (typeof TRANSFORM_TYPE)[number];
  size?: 'big' | 'small';
}

const Polygon = ({ color, transformType, size = 'big' }: Props) => {
  return (
    <div
      className={cn(styles.root, {
        [styles['big-size']]: size === 'big',
        [styles['small-size']]: size === 'small',
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          styles.polygon,
          { [styles['rotate-clockwise']]: transformType === 'clockwise' },
          { [styles['rotate-counterclockwise']]: transformType === 'counterclockwise' }
        )}
      >
        <polygon points="0,0 820,0 920,168 100,168" fill={color} />
      </svg>
    </div>
  );
};

export { Polygon };
