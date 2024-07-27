import { Container } from '@/components/shared/';
import { Title, TopBar, Filters } from '@/components/shared';
import { ProductsGroup } from '@/components/shared/ProductsGroup';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size={'lg'} className='font-extrabold'></Title>
      </Container>

      <TopBar />

      <Container className='pb-14 mt-10'>
        <div className='flex gap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroup
                title='Пиццы'
                items={[
                  {
                    name: 'Pizza',
                    id: 1,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                    items: [{ price: 10 }],
                  },

                  {
                    name: 'Pizza',
                    id: 12,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                    items: [{ price: 10 }],
                  },

                  {
                    name: 'Pizza',
                    id: 15,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                    items: [{ price: 10 }],
                  },

                  {
                    name: 'Pizza',
                    id: 122,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                    items: [{ price: 10 }],
                  },
                  {
                    name: 'Pizza',
                    id: 1111,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                    items: [{ price: 10 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroup
                title='Завтраки'
                items={[
                  {
                    name: 'Pizza',
                    id: 1,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                    items: [{ price: 10 }],
                  },

                  {
                    name: 'Pizza',
                    id: 12,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                    items: [{ price: 10 }],
                  },

                  {
                    name: 'Pizza',
                    id: 13,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                    items: [{ price: 10 }],
                  },

                  {
                    name: 'Pizza',
                    id: 122,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                    items: [{ price: 10 }],
                  },
                  {
                    name: 'Pizza',
                    id: 133,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                    items: [{ price: 10 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
