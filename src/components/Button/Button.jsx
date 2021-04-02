import styles from './Button.module.css';

const validColors = ['primary', 'secondary', 'default'];

export const Button = ({
  children,
  className,
  color,
  raised,
  disabled,
  ...rest
}) => (
  <button
    {...rest}
    className={[
      className,
      styles.button,
      raised && styles.raised,
      validColors.includes(color) && styles[color],
    ].filter(Boolean).join(' ')}
    disabled={disabled}
  >
    {!raised && !disabled && <div className={styles.background} />}
    {children}
  </button>
);

export default Button;
