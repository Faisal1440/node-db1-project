const express = require("express");

const server = express();
const accountRouter= require("../data/seeds/accountRouter.js")
server.use(express.json());
server.use("/api/accounts", accountRouter)

module.exports = server;
