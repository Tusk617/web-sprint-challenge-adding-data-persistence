
exports.seed = function(knex) {
  return knex("resources_used").insert([
    {project_id: 1, resource_id: 1},
    {project_id: 1, resource_id: 2},
  ])
};
