const CosmosClient = require("@azure/cosmos").CosmosClient;
const endpoint = process.env["COSMOS_ENDPOINT"];
const key = process.env["COSMOS_KEY"];
const databaseId = process.env["COSMOS_DATABASE_ID"];
const containerId = process.env["COSMOS_ARTICLE_CONTAINER_ID"];
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

module.exports = async function(context, req) {
    const id = req.params.id
    
    try {
      await container.item(id).delete();
      return context.res = {
        status: 200,
        body: {result: true}
      }
    } catch (error) {
      return context.res = {
       status: 400,
       body: { result: error }
      };
    }};
    