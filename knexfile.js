// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.projects.db3'
    },
    pool: {
      afterCreate: function (conn, done) {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },


};
