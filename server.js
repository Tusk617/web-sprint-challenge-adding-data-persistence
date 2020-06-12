const express = require("express");

const server = express();
server.use(express.json());

const projectsRouter = require("./projects/projects-router.js")

server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
    res.status(200).json("Connected!")
})

module.exports = server;