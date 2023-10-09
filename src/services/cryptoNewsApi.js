import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_REACT_APP_NEWS_RAPIDAPI_HOST,
};

const createRequest = url => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptoNewsApi: builder.query({
      query: ({ newsCategory, count, page }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}&page=${page}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsApiQuery } = cryptoNewsApi;
