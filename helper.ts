import {
    CosmosClient,
    Database,
    FeedOptions,
    SqlQuerySpec
  } from "@azure/cosmos"
  
  export class Helper {
    private client: CosmosClient
    private db: Database
  
    constructor() {
      const config = {
        endpoint: process.env.COSMOS_ENDPOINT,
        key: process.env.COSMOS_KEY,
      }
      this.client = new CosmosClient(config)
      this.db = this.client.database(process.env.COSMOS_DATABASE_NAME)
    }
  
    public async queryContainerNext(
      querySpec: SqlQuerySpec,
      queryOptions: FeedOptions,
      containerId: string
    ) {
      const container = this.db.container(containerId)
      const {
        resources: result,
        hasMoreResults,
        continuationToken,
      } = await container.items.query(querySpec, queryOptions).fetchNext()
      return { result, hasMoreResults, continuationToken }
    }
}
  