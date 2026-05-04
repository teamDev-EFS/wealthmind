const Avatar = ({ src, alt, size = 10 }: { src: string; alt: string; size?: number }) => (
  <img
    src={src}
    alt={alt}
    className={`rounded-full object-cover border-2 border-primary`}
    style={{ width: size * 4, height: size * 4 }}
    loading="lazy"
  />
);

export default Avatar;
