'use client';
import { cn } from '@/lib/utils';
import { Api } from '@/services/apiClient';
import { Product } from '@prisma/client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FC, useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';

interface searchInputProps {
  className?: string;
}

export const SearchInput: FC<searchInputProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      searchQuery &&
        Api.products.search(searchQuery).then((products) => {
          setProducts(products);
        });
    },
    500,
    [searchQuery]
  );

  const onClickItem = () => {
    setProducts([]);
    setFocused(false);
    setSearchQuery('');
  };
  return (
    <>
      {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />}
      <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
        <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
        <input
          className='rounded-2xl outline-none w-full bg-gray-100 pl-11 '
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Найти пиццу...'
          onFocus={() => setFocused(true)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12'
            )}
          >
            {products.map((p) => (
              <Link onClick={onClickItem} className='flex flex-1 px-2 items-center gap-3 hover:bg-primary/10' href={`product/${p.id}`}>
                <img height={32} width={32} src={p.imageUrl} alt={p.name} />
                <span>{p.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};