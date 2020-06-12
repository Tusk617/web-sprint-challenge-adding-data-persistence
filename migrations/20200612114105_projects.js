
exports.up = function(knex) {
    return knex.schema.createTable("projects", tbl => {
        tbl.increments();
        tbl.string("project_name", 225);
        tbl.string("project_desc", 225).nullable();
        tbl.boolean("project_status").defaultTo(false);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects");
  };
  