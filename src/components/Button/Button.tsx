
import React from 'react';
import buttonVariant, { ButtonVariantProps } from '../buttonVariant/buttonVariant';

export interface ButtonProps extends ButtonVariantProps {
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
>
  {props.children}
</button>
 );
};

