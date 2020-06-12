
exports.seed = function(knex) {
  return knex("projects").insert([
    {project_name: "Create spreadsheet", project_desc: "Create an Excel spreadsheet", project_status: false},
    {project_name: "Write genre defining novel", project_desc: "Using word to write the worlds greatest fantasy novel", project_status: false}
  ])
};
