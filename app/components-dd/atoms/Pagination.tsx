import Txt from './Txt';

interface Props {
  currentPage: number;
  totalPage: number;
}

export default function Pagination({ currentPage, totalPage }: Props) {
  return (
    <div className='flex px-2 py-1 text-center bg-gray-300 rounded-full opacity-90 w-fit'>
      <Txt typography='caption' isBold={true} color='white'>
        {currentPage}
      </Txt>
      <Txt typography='caption' color='white'>
        {`/${totalPage}`}
      </Txt>
    </div>
  );
}
