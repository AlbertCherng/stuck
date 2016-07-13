exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('creators').insert({id: 1, name: 'Alice', email: 'alice@gmail.com'}),
    knex('polls').insert({id: 1, title: 'Food', description: 'Which resturant should we go to?', admin_digest:10, participant_digest:20, creator_id:1}),
    knex('choices').insert({id: 1, title: 'Sushi', description: 'Because sushi', poll_id: 1}),
    knex('choices').insert({id: 2, title: 'Taco', description: 'Because taco', poll_id: 1}),
    knex('participants').insert({id: 1, name: 'KV', email: 'kv@gmail.com', poll_id: 1}),
    knex('participants').insert({id: 2, name: 'Raf', email: 'raf@gmail.com', poll_id: 1}),
    knex('rankings').insert({ranking: 2, participant_id: 1, choice_id:1}),
    knex('rankings').insert({ranking: 3, participant_id: 2, choice_id:2}),
  ]);
};
