import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache,HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://g5ibzzaibbardpxizlfzkcihhi.appsync-api.eu-west-1.amazonaws.com/graphql',
       fetch, 
       headers: {
        "x-api-key": "da2-ulpkj4t3y5ep5chqsmpcqdf7hi", // ENTER YOUR API KEY HERE
      },
    }),
    cache: new InMemoryCache()
})