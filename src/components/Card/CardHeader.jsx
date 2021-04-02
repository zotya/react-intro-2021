import styles from './CardHeader.module.css';

export const CardHeader = ({
  title,
  subtitle,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={[
      className,
      styles.cardHeader,
    ].filter(Boolean).join(' ')}
  >
    <h1 className={styles.title}>{title}</h1>
    {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
  </div>
);

export default CardHeader;
