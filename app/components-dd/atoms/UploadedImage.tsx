import joinClassNames from '@/app/libs-dd/utils/joinClassNames';

interface Props {
  id: number;
  size: 'small' | 'medium' | 'large';
  imageUrl: string;
  handleDelete: (id: number) => void;
}

export default function UploadedImage({ id, size, imageUrl, handleDelete }: Props) {
  return (
    <div className={joinClassNames('relative border-2 rounded-md cursor-pointer block', SIZE_VARIANTS[size])}>
      <img className='object-cover w-full h-full rounded-md ' src={imageUrl} />
      <button
        className='absolute top-0 right-0 w-5 h-5 text-gray-100 hover:text-gray-200'
        onClick={() => handleDelete(id)}
      >
        <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
}

const SIZE_VARIANTS = {
  small: 'h-20 w-20',
  medium: 'h-32 w-32',
  large: 'h-40 w-40',
};
