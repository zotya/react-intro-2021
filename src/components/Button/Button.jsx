import styles from './Button.module.css';

const validColors = ['primary', 'secondary', 'default'];
const validVariants = ['raised', 'outlined', 'default'];

export const Button = ({
  children,
  className,
  color = 'default',
  variant = 'default',
  disabled,
  ...rest
}) => (
  <button
    {...rest}
    className={[
      className,
      styles.button,
      validVariants.includes(variant) && styles[variant],
      validColors.includes(color) && styles[color],
    ].filter(Boolean).join(' ')}
    disabled={disabled}
  >
    {variant !== 'raised' && !disabled && <div className={styles.background} />}
    {variant === 'outlined' && <div className={styles.outline} />}
    {children}
    {variant === 'raised' && <div className={styles.overlay} />}
  </button>
);

export default Button;
