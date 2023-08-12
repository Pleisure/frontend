import roundReviewCount from '@/app/libs-dd/utils/roundReviewCount';
import Txt from '../atoms/Txt';
import { ILeisureStore } from '@/app/libs-dd/hooks/useLeisureStores';
import Link from 'next/link';

interface Props {
  href: string;
  store: ILeisureStore;
}

export default function StoreCard({ store, href }: Props) {
  return (
    <Link className='flex flex-col items-center w-full h-full' href={href}>
      <img className='w-full rounded-md bg-rose-200 aspect-square' src={store.storeThumbnailUrl} />
      <div className='w-full'>
        <div className='justify-start block w-full'>
          <Txt typography='body' isBold={true} className='w-full overflow-hidden text-ellipsis whitespace-nowrap'>
            {store.storeName}
          </Txt>
        </div>
        <div className='flex justify-start w-full space-x-4'>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4 text-cyan-400'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            <Txt typography='caption' isBold={true}>
              {store.storeAverageRating}
            </Txt>
          </div>
          <div className='flex space-x-1'>
            <Txt typography='caption'>리뷰</Txt>
            <Txt typography='caption'>{roundReviewCount(store.storeReviewCount)}</Txt>
          </div>
        </div>
      </div>
    </Link>
  );
}
