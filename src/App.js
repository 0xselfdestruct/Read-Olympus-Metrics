import { ApolloProvider } from "@apollo/client";
import ThemeProvider from "./components/ThemeProvider";
import GraphqlClient from "./components/GraphqlClient";
import HomePage from "./pages/HomePage";


const App = () => {


  return (
    <ThemeProvider>
      <ApolloProvider client={GraphqlClient}>
        <HomePage />
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
