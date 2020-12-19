require("dotenv").config();
const CosmosClient = require("@azure/cosmos").CosmosClient;
const client = new CosmosClient({ endpoint: process.env.ENDPOINT, key: process.env.KEY });
const database = client.database(process.env.DATABASEID);
const container = database.container(process.env.CONTAINERID);

module.exports = async function (context, req) {
    const newGame = req.body.newGame;
    const { resource: createdItem } = await container.items.create({name: newGame.name, playerAmount: newGame.playerAmount});
};
