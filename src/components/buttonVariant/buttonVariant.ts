
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

export default function buttonVariant(props: ButtonVariantProps) {
    const { type, size } = props;
    const buttonClasses = `
        maui-rounded bg-[var(--${type})] text-[var(--${type}-foreground)]
        ${size === 'sm' ? 'px-2 py-1 text-xs' : ''}
        ${size === 'md' ? 'px-4 py-2' : ''}
        ${size === 'lg' ? 'px-6 py-3 text-lg' : ''}
        ${size === 'xl' ? 'px-8 py-4 text-xl' : ''}
        ${size === 'icon' ? 'p-2' : ''}
    `.replace(/\s+/g, ' ').trim();
    return buttonClasses;
}
