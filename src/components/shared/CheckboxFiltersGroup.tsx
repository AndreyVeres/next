'use client';

import { ChangeEvent, FC, useState } from 'react';
import { FilterChecboxProps, FilterCheckbox } from './FilterCheckox';
import { Title } from './title';
import { Input, Skeleton } from '../ui';

type Item = FilterChecboxProps;

interface CheckboxFiltersGroupProps {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup: FC<CheckboxFiltersGroupProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  loading,
  onClickCheckbox,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

        {...Array(limit).fill(0).map((_, i) => <Skeleton key={i} className='mb-4 h-6' />)}
      </div>
    );
  }

  const list = showAll ? items.filter((i) => i.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems?.slice(0, limit);

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>
      {showAll && (
        <div className='mb-5'>
          <Input onChange={onChangeHandler} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
        </div>
      )}
      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button className='text-primary mt-3' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Скрыть' : '+Показать всё'}
          </button>
        </div>
      )}
    </div>
  );
};
