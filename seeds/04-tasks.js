
exports.seed = function(knex) {
  return knex("tasks").insert([
    {task_desc: "Turn on computer", project_id: 1, step_number: 1},
    {task_desc: "Open Microsoft Excel", project_id: 1, step_number: 2},
    {task_desc: "Make the spreadsheet", project_id: 1, step_number: 3},
    {task_desc: "Turn on computer part 2", project_id: 2, step_number: 1},
    {task_desc: "Open Microsoft Word", project_id: 2, step_number: 2},
    {task_desc: "Make the novel", project_id: 2, step_number: 3}
  ])
};
