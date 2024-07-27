'use client';

import { FC, useEffect } from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './ProductCard';
import React from 'react';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';
interface ProductsGroupProps {
  className?: string;
  listClassName?: string;
  categoryId: number;
  title: string;
  //   products:CategoryProducts['products'];
  items: any[];
}

export const ProductsGroup: FC<ProductsGroupProps> = ({ className, listClassName, categoryId, title, items }) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef<HTMLDivElement | null>(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection]);

  return (
    <div ref={intersectionRef} className={className} id={title}>
      <Title text={title} />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            // ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
