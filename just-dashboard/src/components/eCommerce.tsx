'use client';

import {
  DotOutlineIcon,
  TrendDownIcon,
  TrendUpIcon,
} from '@phosphor-icons/react';
import React from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  LineChart,
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Separator } from './ui/separator';
import Image from 'next/image';
import { ChartData } from 'chart.js';
import RoundedDoughnutChart from './RoundedDoughnutChart';
import { useTheme } from 'next-themes';

const chartData = [
  { month: 'January', projections: 18, actuals: 22 },
  { month: 'February', projections: 22, actuals: 26 },
  { month: 'March', projections: 18, actuals: 22 },
  { month: 'April', projections: 25, actuals: 29 },
  { month: 'May', projections: 17, actuals: 19 },
  { month: 'June', projections: 22, actuals: 26 },
];

const lineChartData = [
  { month: 'January', projections: 85, actuals: 20 },
  { month: 'February', projections: 70, actuals: 40 },
  { month: 'March', projections: 50, actuals: 55 },
  { month: 'April', projections: 30, actuals: 60 },
  { month: 'May', projections: 25, actuals: 50 },
  { month: 'June', projections: 35, actuals: 35 }, // The lines intersect here
  { month: 'July', projections: 55, actuals: 25 },
  { month: 'August', projections: 75, actuals: 30 },
  { month: 'September', projections: 90, actuals: 45 },
];

const mapChartData = [
  {
    location: 'New York',
    revenue: 72_000,
  },
  {
    location: 'San Francisco',
    revenue: 39_000,
  },
  {
    location: 'Sydney',
    revenue: 25_000,
  },
  {
    location: 'Singapore',
    revenue: 61_000,
  },
];

const mapTotalRevenue = mapChartData.reduce(
  (total, item) => total + item.revenue,
  0
);

const tableData = [
  {
    name: 'ASOS Ridley High Waist',
    price: '$79.49',
    quantity: 82,
    amount: '$6,518.18',
  },
  {
    name: 'Marco Lightweight Shirt',
    price: '$128.50',
    quantity: 37,
    amount: '$4,754.50',
  },
  {
    name: 'Half Sleeve Shirt',
    price: '$39.99',
    quantity: 64,
    amount: '$2,559.36',
  },
  {
    name: 'Lightweight Jacket',
    price: '$20.00',
    quantity: 184,
    amount: '$3,680.00',
  },
  {
    name: 'Marco Shoes',
    price: '$79.49',
    quantity: 64,
    amount: '$1,965.81',
  },
];

const pieChartPrice = [300.56, 135.18, 154.02, 48.96];
const pieChartPriceSum = pieChartPrice.reduce((a, b) => a + b, 0);
const piechartData: ChartData<'doughnut'> = {
  labels: ['Direct', 'Affilliate', 'Sponsored', 'E-mail'],
  datasets: [
    {
      data: [
        parseFloat(((pieChartPrice[0] / pieChartPriceSum) * 100).toFixed(1)),
        parseFloat(((pieChartPrice[1] / pieChartPriceSum) * 100).toFixed(1)),
        parseFloat(((pieChartPrice[2] / pieChartPriceSum) * 100).toFixed(1)),
        parseFloat(((pieChartPrice[3] / pieChartPriceSum) * 100).toFixed(1)),
      ],
      backgroundColor: ['#95A4FC', '#C6C7F8', '#BAEDBD', '#B1E3FF'],
      borderWidth: 0,
    },
  ],
};

const chartConfig = {
  projections: {
    label: 'Projections',
    color: 'var(--chart-1)',
  },
  actuals: {
    label: 'Actuals',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

const ECommerceStats = () => (
  <div className='grid h-full grid-cols-2 grid-rows-2 gap-4'>
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
function ChartBarStacked() {
  return (
    <Card className='border-none'>
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
              // tickCount={5}
              ticks={[0, 10, 20, 30, 40, 50, 60]}
              tickFormatter={(value) => `${value}M`}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey='projections'
              stackId='a'
              fill='var(--color-projections)'
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey='actuals'
              stackId='a'
              fill='var(--color-actuals)'
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function ChartLineMultiple() {
  return (
    <Card className='max-h-xl w-full border-none'>
      <CardHeader>
        <CardTitle className='flex items-center gap-4'>
          <span>Revenue</span>
          <Separator orientation='vertical' className='!h-[20px] !w-[2px]' />

          <span className='flex items-center text-sm font-normal'>
            <DotOutlineIcon size={32} weight='fill' /> Current Week $58,211
          </span>

          <span className='flex items-center text-sm font-normal'>
            <DotOutlineIcon size={32} weight='fill' /> Previous Week $68,768
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='max-h-[300px] w-full'>
          <LineChart
            accessibilityLayer
            data={lineChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickCount={3}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickFormatter={(value) => `${value}M`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey='projections'
              type='monotone'
              stroke='var(--color-projections)'
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey='actuals'
              type='monotone'
              stroke='var(--color-actuals)'
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function ChartMap({ isDark }: { isDark?: boolean }) {
  return (
    <Card className='h-full border-none'>
      <CardHeader>
        <CardTitle>Revenue by Location</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-8'>
        <Image
          src={isDark ? '/map-dark.png' : '/map-light.png'}
          alt='Revenue by Location'
          layout='responsive'
          width={300}
          height={200}
        />

        <div className='mt-4 space-y-4'>
          {mapChartData.map((item) => (
            <div
              key={item.location}
              className='flex flex-col items-center justify-between'
            >
              <div className='flex w-full items-center justify-between space-y-1 text-sm'>
                <div>{item.location}</div>
                <div className='font-medium'>
                  {(item.revenue / 1000).toFixed(0)}k
                </div>
              </div>
              {/* Replace Progress component with custom implementation */}
              <div className='bg-muted h-1 w-full overflow-hidden rounded-full'>
                <div
                  className='bg-secondary h-full'
                  style={{
                    width: `${(item.revenue / mapTotalRevenue) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function TableStats() {
  return (
    <Card className='h-full border-none'>
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className=''>
              <TableHead className='text-muted-foreground w-[100px]'>
                Name
              </TableHead>
              <TableHead className='text-muted-foreground'>Price</TableHead>
              <TableHead className='text-muted-foreground'>Quantity</TableHead>
              <TableHead className='text-muted-foreground'>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((item) => (
              <TableRow key={item.name} className='border-none'>
                <TableCell className='h-14 font-medium'>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function PieChartStats() {
  return (
    <Card className='flex h-full flex-col border-none'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Pie Chart - Donut</CardTitle>
      </CardHeader>
      <CardContent className='flex h-full flex-1 flex-col justify-between pb-0'>
        <RoundedDoughnutChart piechartData={piechartData} />
        <div className='mt-4 flex flex-col gap-4'>
          {piechartData.labels?.map((label, index) => (
            <div
              key={`${String(label)}-${index}`}
              className='flex items-center justify-between text-sm'
            >
              <div className='flex items-center gap-2'>
                <span
                  className='inline-block h-2 w-2 rounded-full'
                  style={{
                    backgroundColor: (
                      piechartData.datasets[0].backgroundColor as string[]
                    )[index],
                  }}
                ></span>
                {label as string}
              </div>
              <div className='font-medium'>
                {piechartData.datasets[0].data?.[index]}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

const ECommerce = () => {
  const { theme } = useTheme();
  return (
    <section className='w-full flex-1 p-8 pb-20'>
      <h2 className='text-xl font-semibold'>eCommerce</h2>
      <div className='mt-4 grid grid-cols-4 gap-4'>
        <div className='col-span-2'>
          <ECommerceStats />
        </div>

        <div className='col-span-2'>
          <ChartBarStacked />
        </div>

        <div className='col-span-3'>
          <ChartLineMultiple />
        </div>
        <div className='col-span-1'>
          <ChartMap isDark={theme === 'dark'} />
        </div>

        <div className='col-span-3'>
          <TableStats />
        </div>
        <div className='col-span-1'>
          <PieChartStats />
        </div>
      </div>
    </section>
  );
};

export default ECommerce;
