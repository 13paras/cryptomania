import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_CRYPTO_API_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_REACT_APP_CRYPTO_RAPIDAPI_HOST,
};

const createRequest = url => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: count => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;