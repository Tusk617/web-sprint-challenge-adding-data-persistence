
exports.seed = function(knex) {
  return knex("projects").insert([
    {project_name: "Create spreadsheet", project_desc: "Create an Excel spreadsheet", project_status: false}
  ])
};
