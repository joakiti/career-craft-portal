import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
  fallbackSrc?: string;
}

const ImageWithFallback = ({ 
  className, 
  fallbackClassName,
  fallbackSrc,
  alt,
  ...props 
}: ImageWithFallbackProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

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
        className={cn(
          isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300",
          className
        )}
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