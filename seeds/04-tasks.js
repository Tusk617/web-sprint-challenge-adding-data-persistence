
exports.seed = function(knex) {
  return knex("tasks").insert([
    {task_desc: "Turn on computer", project_id: 1, step_number: 1},
    {task_desc: "Open Microsoft Excel", project_id: 1, step_number: 2},
    {task_desc: "Make the spreadsheet", project_id: 1, step_number: 3}
  ])
};
