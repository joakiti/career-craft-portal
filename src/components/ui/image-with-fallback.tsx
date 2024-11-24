import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

const ImageWithFallback = ({ 
  className, 
  fallbackClassName,
  alt,
  ...props 
}: ImageWithFallbackProps) => {
  const [isLoading, setIsLoading] = useState(true);

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
        className={cn(isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300", className)}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;