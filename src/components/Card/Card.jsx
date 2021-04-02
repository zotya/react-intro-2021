import styles from './Card.module.css';

export const Card = ({
  children,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={[
      className,
      styles.card,
    ].filter(Boolean).join(' ')}
  >
    {children}
  </div>
);

export default Card;
