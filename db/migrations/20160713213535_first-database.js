exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('creators', function (table) {
      table.increments();
      table.string('name');
      table.string('email');
    }),

    knex.schema.createTable('polls', function (table) {
      table.increments();
      table.string('title');
      table.text('description');
      table.integer('admin_digest');
      table.integer('participant_digest');
      table.integer('creator_id');
    }),

    knex.schema.createTable('choices', function (table) {
      table.increments();
      table.string('title');
      table.text('description');
      table.integer('poll_id');
    }),

    knex.schema.createTable('participants', function (table) {
      table.increments();
      table.string('name');
      table.string('email');
      table.integer('poll_id');
    }),

    knex.schema.createTable('rankings', function (table) {
      table.integer('ranking');
      table.integer('participant_id');
      table.integer('choice_id');
    }),

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('creators'),
    knex.schema.dropTable('polls'),
    knex.schema.dropTable('choices'),
    knex.schema.dropTable('participants'),
    knex.schema.dropTable('rankings'),
  ])
};
