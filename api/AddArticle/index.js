const CosmosClient = require("@azure/cosmos").CosmosClient;
const endpoint = process.env["COSMOS_ENDPOINT"];
const key = process.env["COSMOS_KEY"];
const databaseId = process.env["COSMOS_DATABASE_ID"];
const containerId = process.env["COSMOS_ARTICLE_CONTAINER_ID"];
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

module.exports = async function (context, req) {
    console.log(req);
    const { resource: createdItem } = await container.items.create({name: "test", playerAmount: 1});
};