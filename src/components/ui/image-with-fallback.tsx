import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
  fallbackSrc?: string;
}

// The image itself is never opacity-gated: pages are prerendered, so content
// must be visible without JS and must survive hydration after a cached load
// (where onLoad never fires). The skeleton sits behind the image instead.
const ImageWithFallback = ({
  className,
  fallbackClassName,
  fallbackSrc,
  alt,
  ...props
}: ImageWithFallbackProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setIsLoading(false);
      if (img.naturalWidth === 0) setError(true);
    }
  }, []);

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 animate-pulse bg-gradient-to-r from-card to-card-lighter rounded-lg",
            fallbackClassName
          )}
        />
      )}
      <img
        ref={imgRef}
        className={className}
        src={error && fallbackSrc ? fallbackSrc : props.src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
