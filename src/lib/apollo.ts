import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4orbxew0rl101yw6ck4cr1x/master',
  cache: new InMemoryCache()
})