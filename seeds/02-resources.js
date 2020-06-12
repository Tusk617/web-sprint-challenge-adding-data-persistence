
exports.seed = function(knex) {
  return knex("resources").insert([
    {resource_name: "Computers", resource_desc: "A device that lets you do things easier"},
    {resource_name: "Microsoft Office", resource_desc: "A set of programs that let you create different mediums of displaying data"}
  ])
};
