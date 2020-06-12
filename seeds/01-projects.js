
exports.seed = function(knex) {
  return knex("projects").insert([
    {project_name: "Testing", project_desc: "hello world!", project_status: true}
  ])
};
