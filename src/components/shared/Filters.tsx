'use client';
import { FC } from 'react';
import { Title } from './title';
import { FilterCheckbox } from './FilterCheckox';
import { Input } from '../ui';
import { RangeSlider } from './RangeSlider';
import { CheckboxFiltersGroup } from './CheckboxFiltersGroup';
import { useFilterIngredients } from '../../../hooks/useFilterIngredients';

interface FiltersProps {
  className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }) => {
  const { ingredients, loading } = useFilterIngredients();

  const items = ingredients.map((i) => ({ text: i.name, value: String(i.id) }));
  return (
    <div className={className}>
      <Title text='Фиьтрация' size={'sm'} className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex mb-5 gap-3'>
          <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
          <Input type='number' min={100} defaultValue={500} placeholder='1000' max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup loading={loading} className='mt-5' limit={6} defaultItems={items.slice(0, 6)} items={items} title='Ингридиенты' />
    </div>
  );
};
