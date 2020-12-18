const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../config");
const { endpoint, key, databaseId, containerId } = config;
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

module.exports = async function (context, req) {
    const newGame = req.body.newGame;
    const { resource: createdItem } = await container.items.create({name: newGame.name, playerAmount: newGame.playerAmount});
};