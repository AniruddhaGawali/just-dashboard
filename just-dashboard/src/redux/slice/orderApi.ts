import { transformResponse } from '@/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL! + '/orders',
  }),
  tagTypes: ['Orders'], // Add tagTypes for cache invalidation
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => '',
      transformResponse: transformResponse,
      providesTags: ['Orders'], // This endpoint provides the 'Orders' tag
    }),
    deleteOrder: builder.mutation<boolean, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),

      invalidatesTags: ['Orders'],

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          orderApi.util.updateQueryData('getOrders', undefined, (draft) => {
            const index = draft.findIndex((order) => order.id === id);
            if (index !== -1) draft.splice(index, 1);
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetOrdersQuery, useDeleteOrderMutation } = orderApi;
