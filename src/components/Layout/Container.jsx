import styles from './Container.module.css';

const validDirections = ['vertical', 'horizontal'];

export const Container = ({
  children,
  className,
  direction = 'horizontal',
  ...rest
}) => (
  <div
    {...rest}
    className={[
      className,
      styles.container,
      validDirections.includes(direction) && styles[direction],
    ].filter(Boolean).join(' ')}
  >
    {children}
  </div>
);

export default Container;
