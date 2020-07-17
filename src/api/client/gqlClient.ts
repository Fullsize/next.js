import { ApolloClient, ApolloLink,InMemoryCache,gql,HttpLink,concat } from '@apollo/client';
const httpLink = new HttpLink({ uri: 'https://48p1r2roz4.sse.codesandbox.io' });
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null,
    }
  });

  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
export default client;