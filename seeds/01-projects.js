
exports.seed = function(knex) {
  return knex("projects").insert([
    {project_name: "Insert seed into databse", project_desc: "hello world!", project_status: true}
  ])
};
