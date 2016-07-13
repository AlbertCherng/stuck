exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('polls', function (table) {
      table.integer('participant_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('polls', function (table) {
      table.dropColumn('participant_id');
    })
  ])
};
