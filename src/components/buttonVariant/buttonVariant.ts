
import { cva } from 'class-variance-authority';

/**
 * ButtonVariantProps
 * 
 * Used to define the props for any component resembling a button.
 * This is used for generating classNames, for other button related
 * props, look at the ButtonProps interface in src/components/Button/Button.tsx
 */
export interface ButtonVariantProps {
    /**
     * The type of button to render
     */
    type: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link' | 'outline' | 'muted';
    /**
     * The size of the button
     */
    size: 'sm' | 'md' | 'lg' | 'xl' | 'icon';
}

const buttonClasses = cva("font-sans inline-flex items-center justify-center rounded-md transition duration-200 whitespace-nowrap ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-50 ring-transparent ring-2 text-sm font-medium active:ring-ring focus:ring-ring active:scale-[0.96] ring-offset-2", {
    variants:{
        size: {
            sm: "px-2.5 py-1.5",
            md: "px-4 py-2",
            lg: "px-4 py-2",
            xl: "px-6 py-3",
            icon: "p-2",
        }, 
        type: {
            primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
            destructive:
                "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline:
                "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary:
                "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-muted hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline !ring-transparent",
            muted: "bg-muted text-muted-foreground shadow-sm hover:bg-muted/90",
        }
    },
    defaultVariants: {
        type: "primary",
        size: "md",
    },
});

export default function buttonVariant(props: ButtonVariantProps) {
    return buttonClasses(props);
}
