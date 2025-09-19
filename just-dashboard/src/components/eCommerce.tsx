import { TrendDownIcon, TrendUpIcon } from '@phosphor-icons/react';
import React from 'react';

const ECommerce = () => {
  return (
    <section className='w-full flex-1 p-8'>
      <h2 className='text-xl font-semibold'>eCommerce</h2>
      <div className='mt-2 flex flex-col gap-4'>
        <div className='h-1/3 w-full'>
          <div className='grid h-full w-1/2 grid-cols-2 grid-rows-2 gap-4 p-4'>
            <div className='bg-primary text-primary-foreground flex min-h-[120px] w-full flex-col items-start justify-around rounded-2xl px-8 py-4'>
              <div className='text-md font-semibold'>Customer</div>
              <div className='flex items-start justify-center gap-4'>
                <div className='text-3xl font-semibold'>3,781</div>
                <div className='flex items-center justify-center gap-2 text-sm'>
                  +11.1% <TrendUpIcon size={16} weight='duotone' />
                </div>
              </div>
            </div>

            <div className='bg-card text-card-foreground flex min-h-[120px] w-full flex-col items-start justify-around rounded-2xl px-8 py-4'>
              <div className='text-md font-semibold'>Order</div>
              <div className='flex items-start justify-center gap-4'>
                <div className='text-3xl font-semibold'>1,219</div>
                <div className='flex items-center justify-center gap-2 text-sm'>
                  -0.03% <TrendDownIcon size={16} weight='duotone' />
                </div>
              </div>
            </div>

            <div className='bg-card text-card-foreground flex min-h-[120px] w-full flex-col items-start justify-around rounded-2xl px-8 py-4'>
              <div className='text-md font-semibold'>Revenue</div>
              <div className='flex items-start justify-center gap-4'>
                <div className='text-3xl font-semibold'>$695</div>
                <div className='flex items-center justify-center gap-2 text-sm'>
                  +15.3% <TrendUpIcon size={16} weight='duotone' />
                </div>
              </div>
            </div>

            <div className='bg-primary/85 text-primary-foreground flex min-h-[120px] w-full flex-col items-start justify-around rounded-2xl px-8 py-4'>
              <div className='text-md font-semibold'>Growth</div>
              <div className='flex items-start justify-center gap-4'>
                <div className='text-3xl font-semibold'>30.1%</div>
                <div className='flex items-center justify-center gap-2 text-sm'>
                  +6.08% <TrendUpIcon size={16} weight='duotone' />
                </div>
              </div>
            </div>
          </div>

          <div className='w-1/2'></div>
        </div>

        <div className='w-full bg-red-500'>
          <div className=''></div>
          <div className=''></div>
        </div>

        <div className='w-full bg-red-500'>
          <div className=''></div>
          <div className=''></div>
        </div>
      </div>
    </section>
  );
};

export default ECommerce;
