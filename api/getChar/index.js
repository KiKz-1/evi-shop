const CosmosClient = require("@azure/cosmos").CosmosClient;
const endpoint = process.env["COSMOS_ENDPOINT"]
const key = process.env["COSMOS_KEY"]
const databaseId = process.env["COSMOS_DATABASE_ID"];
const containerId = process.env["COSMOS_ARTICLE_CONTAINER_ID"];
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

module.exports = async function(context, req ) {
  const querySpec = {
    query: `SELECT * from c WHERE c.userId = ${req.params.id}`
  };

  const { resources } = await container.items.query(querySpec).fetchAll()

  return context.res = {
    status: 200,
    body: resources
  };
};

