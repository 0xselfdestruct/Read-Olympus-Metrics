import {
    ApolloClient,
    InMemoryCache,
    gql
} from "@apollo/client";


const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";

const GraphqlClient = new ApolloClient({
    uri: THE_GRAPH_URL,
    cache: new InMemoryCache()
});

export default GraphqlClient

export const protocolMetricsQuery = gql`
    query {
      _meta {
        block {
          number
        }
      }
      protocolMetrics(first: 1, orderBy: timestamp, orderDirection: desc) {
        timestamp
        ohmCirculatingSupply
        sOhmCirculatingSupply
        totalSupply
        ohmPrice
        marketCap
        totalValueLocked
        treasuryMarketValue
        nextEpochRebase
        nextDistributedOhm
      }
    }
  `;