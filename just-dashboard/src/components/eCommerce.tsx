'use client';

import { TrendDownIcon, TrendUpIcon } from '@phosphor-icons/react';
import React from 'react';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', projections: 18, actuals: 22 },
  { month: 'February', projections: 22, actuals: 26 },
  { month: 'March', projections: 18, actuals: 22 },
  { month: 'April', projections: 25, actuals: 29 },
  { month: 'May', projections: 17, actuals: 19 },
  { month: 'June', projections: 22, actuals: 26 },
];

const chartConfig = {
  desktop: {
    label: 'Projections',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Actuals',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

const ECommerceStats = () => (
  <div className='grid h-full grid-cols-2 grid-rows-2 gap-4 p-4'>
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
);

export function ChartBarStacked() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} barSize={20}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickCount={3}
              domain={[0, 40]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(value) => `${value}M`}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey='projections'
              stackId='a'
              fill='var(--color-desktop)'
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey='actuals'
              stackId='a'
              fill='var(--color-mobile)'
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const ECommerce = () => {
  return (
    <section className='w-full flex-1 p-8'>
      <h2 className='text-xl font-semibold'>eCommerce</h2>
      <div className='mt-2 grid grid-cols-2 gap-4'>
        <ECommerceStats />

        <ChartBarStacked />

        <div className=''></div>
        <div className=''></div>

        <div className=''></div>
        <div className=''></div>
      </div>
    </section>
  );
};

export default ECommerce;
