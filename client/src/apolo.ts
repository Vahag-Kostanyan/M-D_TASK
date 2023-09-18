// src/apollo.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;
