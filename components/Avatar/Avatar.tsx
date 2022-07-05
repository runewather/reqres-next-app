import styles from "./Avatar.module.css"

interface Props {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;  
  style?: React.CSSProperties;
}

const Avatar: React.FC<Props> = ({ src, alt, width = "64px", height = "64px", style }) => {
  return (
    <img style={style} src={src} alt={alt} width={width} height={height} className={styles.avatar} />
  )
}

export default Avatar;