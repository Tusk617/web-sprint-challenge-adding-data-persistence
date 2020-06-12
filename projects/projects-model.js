const knex = require("knex");
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    findProjects,
    addProject,
    findResources,
    addResource
};

function findProjects() {
    return db("projects");
}//working

function addProject(newProject) {
    return db("projects").insert(newProject)
    .then(() => {
        return newProject;
    })
}//working

function findResources() {
    return db("resources");
}//working

function addResource(newResource) {
    return db("resources").insert(newResource)
    .then(() => {
        return newResource;
    })
}