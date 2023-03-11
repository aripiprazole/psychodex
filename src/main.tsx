import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {ChakraProvider} from '@chakra-ui/react';
import {Auth0Provider} from '@auth0/auth0-react';

const client = new ApolloClient({
  uri: 'https://api.psychonautwiki.org/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ApolloProvider client={client}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
