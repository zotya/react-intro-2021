import styles from './Button.module.css';

export const Button = ({
  children,
  type,
  className,
  color = 'primary',
  raised = false,
  fontSize = 10,
  style,
  ...rest
}) => (
  <button
    type={type || 'button'}
    style={{
      ...style,
      fontSize,
    }}
    className={[
      className,
      styles.button,
      styles[color] || styles.primary,
      raised && styles.raised,
    ].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
