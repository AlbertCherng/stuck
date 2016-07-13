exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('creators').insert({id: 1, name: 'Alice'}),
    knex('creators').insert({id: 2, name: 'Bob'}),
    knex('creators').insert({id: 3, name: 'Charlie'}),
    knex('polls').insert({id: 1, name: 'Alice'}),
    knex('polls').insert({id: 2, name: 'Bob'}),
    knex('polls').insert({id: 3, name: 'Charlie'}),
    knex('choices').insert({id: 1, name: 'Alice'}),
    knex('choices').insert({id: 2, name: 'Bob'}),
    knex('choices').insert({id: 3, name: 'Charlie'})
    knex('participants').insert({id: 1, name: 'Alice'}),
    knex('participants').insert({id: 2, name: 'Bob'}),
    knex('participants').insert({id: 3, name: 'Charlie'}),
    knex('rankings').insert({id: 1, name: 'Alice'}),
    knex('rankings').insert({id: 2, name: 'Bob'}),
    knex('rankings').insert({id: 3, name: 'Charlie'})
  ]);
};
