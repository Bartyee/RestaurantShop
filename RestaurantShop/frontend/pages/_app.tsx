import { AppProps } from "next/app";
import { MantineProvider, useMantineTheme } from "@mantine/core";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/graphql";

function App(props: AppProps) {
  const { Component, pageProps } = props;

  const client = new ApolloClient({
    link: new HttpLink({
      uri: API_URL,
    }),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <>
      <ApolloProvider client={client}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light",
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
