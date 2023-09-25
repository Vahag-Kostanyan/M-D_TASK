import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accessToken'); // Replace with your token retrieval logic
  return {
    headers: {
      ...headers,
      Accept: 'application/json',
      Authorization: token ? `Bearer ${token}` : '', // Include the token in the 'Authorization' header
    },
  };
})


const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql', // Your GraphQL API URL
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;
