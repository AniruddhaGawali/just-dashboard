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

import { Skeleton } from './ui/skeleton';
import { capitalize, formatNumber } from '@/utils';

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

const chartConfig = {
  projection: {
    label: 'Projections',
    color: 'var(--chart-1)',
  },
  actual: {
    label: 'Actuals',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

const ECommerceStats = ({
  dashboardStats,
}: {
  dashboardStats?: DashboardStats[];
}) => {
  const colors = [
    'bg-primary text-primary-foreground',
    'bg-card text-card-foreground',
    'bg-card text-card-foreground',
    'bg-primary/85 text-primary-foreground',
  ];

  const formatNumberType = [null, null, 'currency', null];

  if (!dashboardStats) {
    return (
      <div className='grid h-full grid-cols-2 grid-rows-2 gap-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            className='bg-card flex min-h-[120px] w-full flex-col items-start justify-around rounded-2xl px-8 py-4'
            key={index}
          />
        ))}
      </div>
    );
  }

  return (
    <div className='grid h-full grid-cols-2 grid-rows-2 gap-4'>
      {dashboardStats.map((stat, index) => (
        <div
          key={stat.title + index}
          className={`flex min-h-[120px] w-full flex-col items-start justify-around rounded-2xl px-8 py-4 ${colors[index]} `}
        >
          <div className='text-md font-semibold'>{stat.title}</div>
          <div className='flex items-start justify-center gap-4'>
            <div className='text-3xl font-semibold'>
              {formatNumber(stat.value, formatNumberType[index])}
            </div>
            <div className='flex items-center justify-center gap-2 text-sm'>
              {stat.growth_percent}%
              {stat.growth_percent >= 0 ? (
                <TrendUpIcon size={16} weight='duotone' />
              ) : (
                <TrendDownIcon size={16} weight='duotone' />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function ChartBarStacked({ data }: { data?: DashboardBarChartData[] }) {
  if (!data) {
    return (
      <Skeleton className='h-full w-full rounded-xl'>
        <Card className='h-full border-none'>
          <CardHeader>
            <CardTitle>Projections vs Actuals</CardTitle>
          </CardHeader>
        </Card>
      </Skeleton>
    );
  }

  return (
    <Card className='border-none'>
      <CardHeader>
        <CardTitle>Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data} barSize={20}>
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
              dataKey='projection'
              stackId='a'
              fill='var(--color-projection)'
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey='actual'
              stackId='a'
              fill='var(--color-actual)'
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function ChartLineMultiple({ data }: { data?: DashboardBarChartData[] }) {
  if (!data) {
    return (
      <Skeleton className='h-full w-full rounded-xl'>
        <Card className='max-h-xl h-full w-full border-none'>
          <CardHeader>
            <CardTitle className='flex items-center gap-4'>
              <span>Revenue</span>
            </CardTitle>
          </CardHeader>
        </Card>
      </Skeleton>
    );
  }

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
            data={data}
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
              dataKey='projection'
              type='monotone'
              stroke='var(--color-projection)'
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey='actual'
              type='monotone'
              stroke='var(--color-actual)'
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function ChartMap({
  isDark,
  data,
}: {
  isDark?: boolean;
  data?: DashboardMapChartData;
}) {
  if (!data) {
    return (
      <Skeleton className='h-full w-full rounded-xl'>
        <Card className='h-full border-none'>
          <CardHeader>
            <CardTitle>Revenue by Location</CardTitle>
          </CardHeader>
        </Card>
      </Skeleton>
    );
  }

  const mapChartPrice = Object.values(data);
  const mapTotalRevenue = mapChartPrice.reduce((a, b) => a + b, 0);
  const mapChartData = mapChartPrice.map((price, index) => ({
    location: capitalize(Object.keys(data)[index].split('_').join(' ')),
    revenue: price,
  }));

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

function TableStats({ data }: { data?: DashboardTableData[] }) {
  if (!data) {
    return (
      <Skeleton className='h-full w-full rounded-xl'>
        <Card className='h-full border-none'>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
        </Card>
      </Skeleton>
    );
  }

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
            {data.map((item) => (
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

function PieChartStats({ data }: { data?: DashboardPieChartData }) {
  if (!data) {
    return (
      <Skeleton className='h-full w-full rounded-xl'>
        <Card className='h-full border-none'>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
        </Card>
      </Skeleton>
    );
  }

  const pieChartPrice = Object.values(data);
  const pieChartPriceSum = pieChartPrice.reduce((a, b) => a + b, 0);
  const piechartData: ChartData<'doughnut'> = {
    labels: Object.keys(data).map((item) =>
      capitalize(item.split('_').join(' '))
    ),
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

  return (
    <Card className='flex h-full flex-col border-none'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Total Sales</CardTitle>
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

type ECommerceProp = {
  dashboardStats?: DashboardStats[];
  dashboardBarChartData?: DashboardBarChartData[];
  dashboardLineChartData?: DashboardBarChartData[];
  dashboardPieChartData?: DashboardPieChartData;
  dashboardMapChartData?: DashboardMapChartData;
  dashboardTableData?: DashboardTableData[];
};

const ECommerce = ({
  dashboardStats,
  dashboardBarChartData,
  dashboardLineChartData,
  dashboardPieChartData,
  dashboardMapChartData,
  dashboardTableData,
}: ECommerceProp) => {
  const { theme } = useTheme();
  return (
    <section className='w-full flex-1 p-8 pb-20'>
      <h2 className='text-xl font-semibold'>eCommerce</h2>
      <div className='mt-4 grid grid-cols-4 gap-4'>
        <div className='col-span-2'>
          <ECommerceStats dashboardStats={dashboardStats} />
        </div>

        <div className='col-span-2'>
          <ChartBarStacked data={dashboardBarChartData} />
        </div>

        <div className='col-span-3'>
          <ChartLineMultiple data={dashboardLineChartData} />
        </div>
        <div className='col-span-1'>
          <ChartMap isDark={theme === 'dark'} data={dashboardMapChartData} />
        </div>

        <div className='col-span-3'>
          <TableStats data={dashboardTableData} />
        </div>
        <div className='col-span-1'>
          <PieChartStats data={dashboardPieChartData} />
        </div>
      </div>
    </section>
  );
};

export default ECommerce;
