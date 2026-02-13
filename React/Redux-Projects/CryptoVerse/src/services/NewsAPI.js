import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const NewsAPI = createApi({
  reducerPath: "NewsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "b783f2de84msh86976d2c0c43795p1a5789jsn41823827eaf0");
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
      headers.set("X-BingApis-SDK", "true");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => ({
        url: `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = NewsAPI;
