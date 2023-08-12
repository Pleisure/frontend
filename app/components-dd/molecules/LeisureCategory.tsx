import { ICategory } from '@/app/libs-dd/hooks/useLeisureCategories';
import Link from 'next/link';
import Txt from '../atoms/Txt';

interface Props {
  href: string;
  category: ICategory;
}

export default function LeisureCategory({ href, category }: Props) {
  return (
    <Link className='flex flex-col items-center w-full h-full' href={href}>
      <div className='h-14 bg-rose-200 aspect-square'>
        <img src={category.categoryIconUrl} className='w-full h-full' />
      </div>
      <Txt>{category.categoryId + '. ' + category.categoryName}</Txt>
    </Link>
  );
}
