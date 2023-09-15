import { ButtonHTMLAttributes } from 'react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  svg: React.ReactNode;
}
const IconButton = ({ svg, ...props }: IconButtonProps) => {
  return (
    <button {...props} className='items-center w-8 p-1 rounded-md hover:bg-gray-100 aspect-square'>
      {svg}
    </button>
  );
};

export default IconButton;
