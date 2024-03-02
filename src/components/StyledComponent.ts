
/**
 * Interface for styled component props
 */
export default interface StyledComponentProps {
    /**
     * Additional classes to add to the component
     */
    className: string;
    /**
     * Style to apply to the component
     */
    style?: React.CSSProperties | undefined;
};

