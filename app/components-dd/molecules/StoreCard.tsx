import roundReviewCount from '@/app/libs-dd/utils/roundReviewCount';
import Txt from '../atoms/Txt';
import { ILeisureStore } from '@/app/libs-dd/hooks/useLeisureStores';
import Link from 'next/link';
import Star from '../atoms/Star';

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
            <Star size='small' />
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
