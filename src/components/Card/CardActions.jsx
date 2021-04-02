import styles from './CardActions.module.css';

export const CardActions = ({
  children,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={[
      className,
      styles.cardActions,
    ].filter(Boolean).join(' ')}
  >
    {children}
  </div>
);

export default CardActions;
