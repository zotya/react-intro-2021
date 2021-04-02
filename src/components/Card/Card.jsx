/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import styles from './Card.module.css';

export const Card = ({
  children,
  className,
  onClick,
  ...rest
}) => (
  <div
    {...rest}
    onClick={onClick}
    className={[
      className,
      styles.card,
      onClick && styles.clickable,
    ].filter(Boolean).join(' ')}
  >
    {children}
  </div>
);

export default Card;
