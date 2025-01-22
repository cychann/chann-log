import type { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const Image = ({ src, alt, ...props }: ImageProps) => {
  return (
    <figure className="my-8">
      <img {...props} src={src} alt={alt} className="mx-auto rounded-md" />
      {alt && (
        <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          {alt}
        </figcaption>
      )}
    </figure>
  );
};
