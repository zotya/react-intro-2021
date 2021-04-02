import styles from './CardContent.module.css';

export const CardContent = ({
  children,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={[
      className,
      styles.cardContent,
    ].filter(Boolean).join(' ')}
  >
    {children}
  </div>
);

export default CardContent;
