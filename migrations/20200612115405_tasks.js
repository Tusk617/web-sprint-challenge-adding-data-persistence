
exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("task_desc", 225).notNullable();
      tbl.string("task_notes", 50).nullable();
      tbl.boolean("task_status").defaultTo(false);
      tbl.integer("project_id").notNullable().unsigned()
      .references("id").inTable("projects")
      tbl.integer("step_number").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
