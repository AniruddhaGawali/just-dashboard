import { transformResponse } from '@/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
  }),
  tagTypes: ['Orders', 'Users'], // Add tagTypes for cache invalidation
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => '/orders',
      transformResponse: transformResponse,
      providesTags: ['Orders'], // This endpoint provides the 'Orders' tag
    }),
    deleteOrder: builder.mutation<boolean, string>({
      query: (id) => ({
        url: `/orders/${id}`,
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
    createOrder: builder.mutation<Order, CreateOrder>({
      query: (body) => ({
        url: '/orders',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Orders'],

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          orderApi.util.updateQueryData('getOrders', undefined, (draft) => {
            draft.push({
              id: 'temp-id',
              user: {
                id: Number(arg.userId),
                name: '',
                avatar_url: '',
              } as User,
              project: arg.project,
              address: arg.address,
              date: arg.date.toISOString(),
              status: arg.status,
            });
          })
        );

        try {
          const { data: newOrder } = await queryFulfilled;
          // Optionally update the temporary order with the actual data from the server
          dispatch(
            orderApi.util.updateQueryData('getOrders', undefined, (draft) => {
              const index = draft.findIndex((order) => order.id === 'temp-id');
              if (index !== -1) draft[index] = newOrder;
            })
          );
        } catch {
          patchResult.undo();
        }
      },
    }),

    getAllUsers: builder.query<User[], void>({
      query: () => '/user',
      transformResponse: transformResponse,
      providesTags: ['Users'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useDeleteOrderMutation,
  useGetAllUsersQuery,
  useCreateOrderMutation,
} = orderApi;
