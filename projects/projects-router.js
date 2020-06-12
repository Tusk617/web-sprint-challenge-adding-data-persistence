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

router.get("/tasks", (req, res) => {
    Projects.findTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})// finds all tasks and returns their associated project name, description, and step number.

router.post("/tasks", (req, res) => {
    Projects.addTasks(req.body, req.params.id)
    .then(newTask => {
        res.status(200).json(newTask);
    })
    .catch(err => {
        res.status(500).json(err.message);
    })
})

module.exports = router;