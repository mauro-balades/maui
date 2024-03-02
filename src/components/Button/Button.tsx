
import React from 'react';
import buttonVariant, { ButtonVariantProps } from '../buttonVariant/buttonVariant';
import StyledComponentProps from '../StyledComponent';

export interface ButtonProps extends ButtonVariantProps, StyledComponentProps {
  /**
   * The content of the button
   */
  children: React.ReactNode | string;
  /**
   * The onClick handler for the button
   */
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className={buttonVariant(props)}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
 );
};
