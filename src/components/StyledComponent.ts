
/**
 * Interface for styled component props without className
 */
export interface StyledComponentPropsWithoutClassName {
    /**
     * Style to apply to the component
     */
    style?: React.CSSProperties | undefined;
};

/**
 * Interface for styled component props
 */
export default interface StyledComponentProps extends StyledComponentPropsWithoutClassName {
    /**
     * Additional classes to add to the component
     */
    className: string;
};

