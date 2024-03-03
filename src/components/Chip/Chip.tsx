
import React from 'react';
import { cva } from 'class-variance-authority';
import StyledComponentProps from '../StyledComponent';

export interface ChipProps extends StyledComponentProps {
    /**
     * The content of the button
     */
    children: React.ReactNode | string;
    /**
     * The chip color
     */
    color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    /**
     * radius of the chip
     */
    radius: 'sm' | 'md' | 'lg' | 'full';
    /**
     * size of the chip
     */
    size: 'sm' | 'md' | 'lg' | 'xl';
}

const chipVariant = cva("font-sans inline-flex items-center justify-center font-medium w-max border transition duration-200 ease-in-out focus:outline-none ring-transparent ring-2", {
    variants:{
        color: {
            default: "bg-muted text-muted-foreground hover:bg-muted/90",
            primary: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80",
            success: "bg-green-400 text-black border-green-500 hover:bg-green-500",
            warning: "bg-yellow-300 text-black border-yellow-400 hover:bg-yellow-400",
            danger: "bg-red-400 text-white border-red-500 hover:bg-red-500",
        },
        radius: {
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            full: "rounded-full",
        },
        size: {
            sm: "h-6 text-xs px-2",
            md: "h-8 text-sm px-3",
            lg: "h-10 text-base px-4",
            xl: "h-12 text-lg px-5",
        },
    },
    defaultVariants: {
        color: "default",
        radius: "full",
        size: "sm",
    },
});

export const Chip: React.FC<ChipProps> = (props: ChipProps) => {
  return (
    <div className={chipVariant(props)}
      style={props.style}
    >
      {props.children}
    </div>
 );
};
