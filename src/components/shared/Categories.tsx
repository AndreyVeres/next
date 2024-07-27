'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { memo, FC } from 'react';

interface CategoriesProps {
  className?: string;
}

const cats = [
  {
    id: 1,
    name: 'Пиццы',
  },
  {
    id: 2,
    name: 'Комбо',
  },
];

export const Categories: FC<CategoriesProps> = memo(({ className }) => {
  const { activeId, setActiveId } = useCategoryStore((state) => state);
  console.log(activeId)
  return (
    <>
      <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
        {cats.map(({ id, name }) => (
          <a
          href={`/#${name}`}
            key={id}
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5 transition',
              activeId === id  && 'bg-white shadow-md shadow-gray-200 text-primary'
            )}
          >
            <button onClick={() => setActiveId(id)}>{name}</button>
          </a>
        ))}
      </div>
    </>
  );
});

Categories.displayName = 'Categories';
