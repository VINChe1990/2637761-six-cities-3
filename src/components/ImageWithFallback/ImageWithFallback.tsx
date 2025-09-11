import { useState, ImgHTMLAttributes } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
}

const ImageWithFallback = ({ src, fallbackSrc, ...props }: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const imageSrc = hasError || !src ? fallbackSrc : src;

  return (
    <img
      src={imageSrc}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;
