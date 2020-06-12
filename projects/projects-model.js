const knex = require("knex");
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    findProjects,
    addProject
};

function findProjects() {
    return db("projects");
}//working

function addProject(newProject) {
    return db("projects").insert(newProject)
    .then(() => {
        return newProject;
    })
}