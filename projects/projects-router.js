const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Projects.findProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})//finds all projects

router.post("/", (req, res) => {
    Projects.addProject(req.body)
    .then(newProject => {
        res.status(200).json(newProject);
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})//adds a project

router.get("/resources", (req, res) => {
    Projects.findResources()
    .then(resources => {
        res.status(200).json(resources);
    })
})//finds all resources

router.post("/resources", (req, res) => {
    Projects.addResource(req.body)
    .then(newResource => {
        res.status(200).json(newResource);
    })
})//adds a new resource
module.exports = router;