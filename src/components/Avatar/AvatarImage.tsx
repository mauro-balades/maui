
import React, { ImgHTMLAttributes } from 'react';
import { StyledComponentPropsWithoutClassName } from '../StyledComponent';
import { cva } from 'class-variance-authority';

export interface AvatarImageProps extends StyledComponentPropsWithoutClassName, ImgHTMLAttributes<HTMLImageElement> {
  /**
   * radius of the avatar
   */
  radius?: 'sm' | 'md' | 'lg' | 'full';
}

const avatarVariant = cva("w-full h-full", {
  variants: {
    radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    },
  },
  defaultVariants: {
    radius: "full",
  },
});

export const AvatarImage: React.FC<AvatarImageProps> = (props: AvatarImageProps) => {
  return (
    <img className={avatarVariant(props as any)} {...props} />
  );
};
