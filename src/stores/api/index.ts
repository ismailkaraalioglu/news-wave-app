import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
});

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery,
  // tagTypes: [],
  endpoints: () => ({}),
});
