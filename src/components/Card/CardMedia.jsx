import styles from './CardMedia.module.css';

export const CardMedia = ({
  src,
  alt,
  className,
  ...rest
}) => (
  <img
    {...rest}
    src={src}
    alt={alt}
    className={[
      className,
      styles.img,
    ].filter(Boolean).join(' ')}
  />
);

export default CardMedia;
