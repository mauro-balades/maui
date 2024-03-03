
import React from 'react';
import { cva } from 'class-variance-authority';
import StyledComponentProps from '../StyledComponent';

export interface AvatarProps extends StyledComponentProps {
    /**
     * size of the avatar
     */
    size: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * content of the avatar
     */
    children: React.ReactNode;
}

const avatarVariant = cva("relative transition duration-200 ease-in-out", {
    variants:{
        size: {
            sm: "h-6 w-6",
            md: "h-8 w-8",
            lg: "h-10 w-10",
            xl: "h-12 w-12",
        },
    },
    defaultVariants: {
        size: "xl",
    },
});

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  return (
    <div className={avatarVariant(props)}
      style={props.style}
    >
      {props.children}
    </div>
 );
};

export * from './AvatarImage';
