import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { CryptoAPI } from "../services/CryptoAPI";
import { NewsAPI } from "../services/NewsAPI";

const store = configureStore({
    reducer: {
        [CryptoAPI.reducerPath]: CryptoAPI.reducer,
        [NewsAPI.reducerPath]: NewsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CryptoAPI.middleware, NewsAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
