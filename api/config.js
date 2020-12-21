const config = {
  endpoint: "https://evimatch-dbb.documents.azure.com:443/",
  key:
    "E5hdbiIM4XIcjSsa3bGo1OLs0N1iFmgEGe0eBfF7RWduueI2utswfz64IK7fjvpH7yBDxFIwj6bVSDBXxQUZYA",
  databaseId: "evimatchdb",
  containerId: "QueuedGames",
  partitionKey: { kind: "Hash", paths: ["/queuedGames"] }
};
module.exports = config;
