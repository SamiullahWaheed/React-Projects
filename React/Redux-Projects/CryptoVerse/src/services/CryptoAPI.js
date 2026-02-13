import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CryptoAPI = createApi({
  reducerPath: "CryptoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "b783f2de84msh86976d2c0c43795p1a5789jsn41823827eaf0");
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => ({ url: `/coins?limit=${count}` }),
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => ({ url: `/coin/${uuid}` }),
    }),
    getCryptoHistory: builder.query({
      query: ({ uuid, timePeriod = '24h' }) => ({ 
        url: `/coin/${uuid}/history`,
        params: {
          timePeriod: timePeriod,
          referenceCurrencyUuid: 'yhjMzLPhuIDl'
        }
      }),
    }),
    getExchanges: builder.query({
      query: () => ('/exchanges'),
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        limit: '50',
        offset: '0',
        orderBy: '24hVolume',
        orderDirection: 'desc'
      },
    }),
  }),
});

export const { useGetCryptosQuery ,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery } = CryptoAPI;
