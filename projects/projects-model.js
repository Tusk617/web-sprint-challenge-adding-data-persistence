const knex = require("knex");
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    findProjects,
    addProject,
    findResources,
    addResource,
    findTasks,
    addTasks
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
}//working

function findTasks() {
    return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select("projects.project_name", "projects.project_desc", "tasks.task_desc", "tasks.step_number");
}//working

function addTasks(newTasks, id) {
    return db("tasks").insert(newTasks).where({project_id: Number(id)})
    .then(() => {
        return newTasks;
    })
}