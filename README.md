# Pagination with Cosmos DB with azure-cosmos.js SDK

## Prerequisites:

- Create a CosmosDB Account of type SQL API and database named 'javascript' and collection named 'products'
- Insert the data 'ProductsData.json' to CosmosDB using the [Data Migration Tool](https://docs.microsoft.com/en-us/azure/cosmos-db/import-data)

## Steps to Run the application

- Clone the Repository
- Run `npm install`
- Replace the environment COSMOS_ENDPOINT,COSMOS_KEY,COSMOS_DATABASE_NAME,CONTAINER_NAME in the .env file
- Run `npm start` run the application