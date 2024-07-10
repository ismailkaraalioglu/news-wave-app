import { Response } from "@/models";
import { api } from "../api";

const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;

export const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchBreakingNews: build.query<Response, void>({
      query: () => `/top-headlines?country=tr&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useFetchBreakingNewsQuery } = newsApi
