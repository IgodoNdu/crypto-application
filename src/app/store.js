//Here i'll create the redux store
import { configureStore } from "@reduxjs/toolkit";
//Connecting the Api created to the store via import
import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer: {
        //Now provide the reducer path
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
});