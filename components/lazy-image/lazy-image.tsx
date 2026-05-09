"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type LazyImageProps = ImageProps & {
  wrapperClassName?: string;
};

export default function LazyImage({
  wrapperClassName,
  className,
  onLoad,
  alt,
  id,
  priority,
  ...imageProps
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`lazy-image ${loaded ? "is-loaded" : ""} ${wrapperClassName ?? ""}`}>
      <Image
        {...imageProps}
        alt={alt}
        className={`lazy-image__preview ${className ?? ""}`}
        loading="eager"
        quality={20}
        aria-hidden="true"
      />
      <Image
        {...imageProps}
        id={id}
        priority={priority}
        alt={alt}
        className={`lazy-image__origin ${className ?? ""} ${loaded ? "is-loaded" : ""}`}
        loading={priority ? "eager" : "lazy"}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />
    </div>
  );
}
