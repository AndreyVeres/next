import Link from 'next/link';
import { FC } from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  className?: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  //   ingredients: Ingredient[];
}

export const ProductCard: FC<ProductCardProps> = ({ className, id, price, name, imageUrl }) => {
  return (
    <div className={className}>
      <Link href={`product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img className='w-[215px] h-[215px]' src={imageUrl} alt={name} />
        </div>

        <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fugiat!</p>

        <div className='flex justify-between items-center mt-4'>
          <span className='text-[20px]'>on {price} $</span>

          <Button variant={'secondary'} className='text-base font-bold'>
            <Plus className='mr-1' size={20} />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
