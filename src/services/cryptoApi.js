import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_REACT_APP_CRYPTO_RAPIDAPI_HOST,
};

const createRequest = url => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: ({ count, timePeriod, orderBy }) =>
        createRequest(`/coins?limit=${count}&timePeriod=${timePeriod}&orderBy=${orderBy}`),
    }),
    getCoinDetail: builder.query({
      query: coinId => createRequest(`/coin/${coinId}`),
    }),
    getCoinHistory: builder.query({
      query: ({ cryptoId, timePeriod }) =>
        createRequest(`/coin/${cryptoId}/history?timePeriod=${timePeriod}`),
    }),
    getCoinExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCoinDetailQuery,
  useGetCoinHistoryQuery,
  useGetCoinExchangesQuery,
} = cryptoApi;
