'use client';

import joinClassNames from '@/app/libs-dd/utils/joinClassNames';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  boundary: 'body' | 'screen';
  location: 'full' | 'center' | 'bottom' | 'right' | 'left' | 'top';
  children: React.ReactNode;
}

export default function Modal({ isOpen, closeModal, boundary, location, children }: Props) {
  const MAX_WIDTH = 'max-w-md';
  return (
    <div
      className={joinClassNames('z-[999]', MAX_WIDTH, BOUNDARY_VARIANTS[boundary], isOpen ? '' : 'hidden')}
      onClick={() => closeModal()}
    >
      <Backdrop />
      <div className={joinClassNames('bg-white', LOCATION_VARIANTS[location], location === 'full' ? '' : 'border')}>
        {children}
      </div>
    </div>
  );
}

const Backdrop = () => {
  return <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-80' />;
};

const CloseXButton = ({ closeModal }: { closeModal: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className='flex justify-end w-full p-4'>
      <button className='w-8 h-8 p-2' onClick={() => closeModal}>
        <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' viewBox='0 0 20 20' fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
};

const BOUNDARY_VARIANTS = {
  body: 'absolute m-auto top-[84px] w-full h-[calc(100vh-84px)]',
  screen: 'fixed top-0 m-auto w-full h-full',
};

const LOCATION_VARIANTS = {
  full: 'absolute top-0 left-0 w-full h-full',
  center: 'absolute rounded-md m-auto w-fit h-fit max-w-full max-h-full',
  right: 'absolute right-0 top-0 rounded-l-md h-full',
  left: 'absolute left-0 top-0 rounded-r-md h-full',
  top: 'absolute rounded-b-md w-full',
  bottom: 'absolute rounded-t-md w-full',
};

Modal.XButton = CloseXButton;
