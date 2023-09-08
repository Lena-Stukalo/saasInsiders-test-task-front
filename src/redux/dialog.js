import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/chat-gpt-ai",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Dialog"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => `/dialog`,
      providesTags: ["Dialog"],
    }),
    create: builder.mutation({
      query: (data) => ({
        url: `/question`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Dialog"],
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetByIdQuery,
  useDeleteMutation,
  useCreateMutation,
  useUpdateMutation,
} = ordersApi;
