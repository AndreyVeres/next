import { cn } from '@/lib/utils';
import { memo, FC } from 'react';
import { Container } from './Container';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import { SearchInput } from './searchInput';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <>
      <header className={cn('border-b', className)}>
        <Container className='flex items-center justify-between py-8'>
          <Link href='/'>
            <div className='flex items-center gap-4'>
              <Image src='/logo.png' alt='Logo' width={35} height={35} />
              <div>
                <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                <p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
              </div>
            </div>
          </Link>

          <div className='flex-1 mx-10'>
            <SearchInput />
          </div>

          <div className='flex items-center gap-3'>
            <Button variant={'outline'} className='flex items-center gap-1'>
              <User size={16} />
              Войти
            </Button>

            <div>
              <Button className='group relative'>
                <b>520</b>

                <span className='h-full w-[1px] bg-white/30 mx-3'></span>

                <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                  <ShoppingCart className='h-4 w-4 relative' strokeWidth={2} />
                  <b>3</b>
                </div>
                <ArrowRight
                  size={20}
                  className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                />
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
