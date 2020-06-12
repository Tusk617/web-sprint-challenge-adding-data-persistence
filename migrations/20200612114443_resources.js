
exports.up = function(knex) {
  return knex.schema.createTable("resources", tbl => {
    tbl.increments();
    tbl.string("resource_name", 225);
    tbl.string("resource_desc").nullable();
  })
  .createTable("resources_used", tbl => {
      tbl.increments();
      tbl.integer("project_id").unsigned().notNullable()
      .references("id").inTable("projects");
      tbl.integer("resource_id").notNullable()
      .references("id").inTable("resources");
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("resources")
  .dropTableIfExists("resources_used");
};
