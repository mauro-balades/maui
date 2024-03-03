
import React, { TextareaHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import {StyledComponentPropsWithoutClassName} from '../StyledComponent';

export interface TextAreaProps extends StyledComponentPropsWithoutClassName, TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * If the textarea should be resizable
     */
    resizable: boolean;
}

const textareaVariant = cva("font-sans font-medium text-base border transition duration-200 ease-in-out focus:outline-none ring-offset-2 ring-transparent ring-2 p-2 focus:ring-ring rounded-lg", {
    variants:{
        resizable: {
            true: "resize",
            false: "resize-none",
        },
    },
    defaultVariants: {
        resizable: true,
    },
});

export const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {
  return (
    <textarea className={textareaVariant(props as any)}
      {...props}
    />
 );
};
