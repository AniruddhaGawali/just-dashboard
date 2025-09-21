import { transformResponse } from '@/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { use } from 'react';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
  }),
  endpoints: (builder) => ({
    getDashboardStats: builder.query<DashboardStats[], void>({
      query: () => ({
        url: '/dashboard/stats',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),

    useGetDashboardBarChart: builder.query<DashboardBarChartData[], void>({
      query: () => ({
        url: '/dashboard/barchart',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),

    useGetDashboardLineChart: builder.query<DashboardBarChartData[], void>({
      query: () => ({
        url: '/dashboard/linechart',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),

    useGetDashboardPieChart: builder.query<DashboardPieChartData, void>({
      query: () => ({
        url: '/dashboard/piechart',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),

    useGetDashboardMapChart: builder.query<DashboardMapChartData, void>({
      query: () => ({
        url: '/dashboard/geochart',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),

    useGetDashboardTableData: builder.query<DashboardTableData[], void>({
      query: () => ({
        url: '/dashboard/top-selling-product',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useUseGetDashboardBarChartQuery,
  useUseGetDashboardLineChartQuery,
  useUseGetDashboardPieChartQuery,
  useUseGetDashboardMapChartQuery,
  useUseGetDashboardTableDataQuery,
} = dashboardApi;
