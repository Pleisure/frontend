import joinClassNames from '@/app/libs-dd/utils/joinClassNames';
import Txt from './Txt';
import UploadIcon from './UploadIcon';

interface Props {
  size: 'small' | 'medium' | 'large';
  handleChange: (e: React.ChangeEvent) => void;
}

export default function ImageUploader({ size, handleChange }: Props) {
  return (
    <div
      className={joinClassNames('text-center rounded-md aspect-square group items-center justify-center h-fit w-fit')}
    >
      <label
        htmlFor='upload'
        className={joinClassNames(
          'flex flex-col items-center justify-center border-2 border-dashed rounded-md cursor-pointer hover:bg-gray-50 text-gray-400',
          SIZE_VARIANTS[size]
        )}
      >
        <UploadIcon size='small' />
        <Txt typography='caption'>사진 올리기</Txt>
        <input id='upload' type='file' className='hidden' accept='image/*' required multiple onChange={handleChange} />
      </label>
    </div>
  );
}

const SIZE_VARIANTS = {
  small: 'h-20 w-20 flex justify-center items-center',
  medium: 'h-32 w-32',
  large: 'h-40 w-40',
};
