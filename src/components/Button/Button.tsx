
import React from 'react';

export interface ButtonProps {
  text: string;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = 'primary',
  onClick,
}) => {
  const buttonClasses =
    type === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600 text-white'
      : 'bg-gray-200 hover:bg-gray-300 text-black';

  return (
    <button className={`px-4 py-2 rounded ${buttonClasses}`}
  onClick={onClick}
>
  {text}
</button>
 );
};

