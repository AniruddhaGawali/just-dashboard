import { transformResponse } from '@/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL! + '/dashboard',
  }),
  endpoints: (builder) => ({
    getDashboardStats: builder.query<DashboardStats[], void>({
      query: () => ({
        url: '/stats',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),

    useGetDashboardBarChart: builder.query<DashboardBarChartData[], void>({
      query: () => ({
        url: '/barchart',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),

    useGetDashboardLineChart: builder.query<DashboardBarChartData[], void>({
      query: () => ({
        url: '/linechart',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),

    useGetDashboardPieChart: builder.query<DashboardPieChartData, void>({
      query: () => ({
        url: '/piechart',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),

    useGetDashboardMapChart: builder.query<DashboardMapChartData, void>({
      query: () => ({
        url: '/geochart',
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),

    useGetDashboardTableData: builder.query<DashboardTableData[], void>({
      query: () => ({
        url: '/top-selling-product',
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
