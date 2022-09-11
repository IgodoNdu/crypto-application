// Here we'll do the logic of fetching the data from the API
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

//Set the headers
const cryptoApiHeaders = {
    'X-RapidAPI-Key': '2b0337ab2dmsh2b38abf7eb2cdaep17b9b7jsnc94be18d9b21',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      
}

//Set the base url
const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

//utility function to add the url and the headers to our call as every request needs the header
const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    //list out the createApi object options
    reducerPath: 'cryptoApi', //the reducer path
    baseQuery: fetchBaseQuery({ baseUrl }), //i.e short for (baseUrl=baseUrl)
    endpoints: (builder) => ({
        //specify the name of the endpoint
        getCryptos: builder.query({
            //function pointing to the specific request (to make requests, we'llalso need to pass the header)
            query: () => createRequest('/exchanges') //used the utility func for the request, then passed it our local url(route-url)
        })
    })
})

//Copied from RapidAPI HUB
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '2b0337ab2dmsh2b38abf7eb2cdaep17b9b7jsnc94be18d9b21',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
// };