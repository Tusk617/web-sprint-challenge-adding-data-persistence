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
})

router.post("/", (req, res) => {
    Projects.addProject(req.body)
    .then(newProject => {
        res.status(200).json(newProject);
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

module.exports = router;