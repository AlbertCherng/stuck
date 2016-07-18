require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const cookieParser = require('cookie-parser');
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
//const bootstrap   = require('bootstrap');

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);

const usersRoutes = require("./routes/users");

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Users JSON api
// app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get('/a/:admin_digest', (req, res) => {
  // check and redirect
  // set a cookie
  knex('polls').where({admin_digest: req.params.admin_digest}).select('creator_id, id')
  .then(function(results) {
    if(results.length == 0){
      throw error;
    } else {
      const creator_id = results[0].creator_id;
      const id = results[0].id;
      req.cookies("creator_id", creator_id);
      res.redirect(`/polls/${id}/edit`);
    }
  });

});

app.post("/polls", (req, res) => {
  knex('polls').insert({}).returning('id').then(function(results) {
    let id = results[0];
    res.redirect(`/polls/${id}/edit`);
  });
});

app.get("/polls/:id/edit", (req, res) => {
  // fetch poll from db
  knex('polls').select('*').where({id: req.params.id})
  .then(function(polls) {
    knex('choices').select('*').where({poll_id: req.params.id})
    .then(function(choices) {
      knex('choices').select('*').where({poll_id: req.params.id})
    .then(function(participants) {
      let form_choices = choices;
      let form_participants = participants;

      if (form_choices.length == 0) {
        form_choices = [{},{},{}];
      }
      if (participants.length == 0) {
        form_participants = [{},{},{}];
      }
      res.render("poll_edit", {poll: polls[0],
                               choices: form_choices,
                               participants: form_participants});
     });
    });
  });

  });


app.put("/polls/:id", (req, res) => {
  let poll_id = req.params.id;
  console.log(req.body.poll)
  knex('polls').where({id: poll_id}).update({title: req.body.poll.title,
                                             description: req.body.poll.description}).then();
  knex('choices').where({poll_id: poll_id}).delete().then();
  knex('participants').where({poll_id: poll_id}).delete().then();


  for(choice of req.body.poll.choices) {
    knex('choices').insert({title: choice.title,
                             description: choice.description,
                             poll_id: poll_id}).then();
  }

  for(participant of req.body.poll.participants) {
    knex('participants').insert({email: participant.email,
                                poll_id: poll_id}).then();
  }
  res.json({status: "OK"})
});

app.get("/polls/:id/results", (req, res) => {


});

app.get("/p/:participant_digest", (req, res) => {
  // check if digest correct // find which poll it correspdonds to
  // create a participant // set a cookie
    knex('polls').where({participant_digest: req.params.participant_digest})
    .select('id').then(function(results) {

      if(results.length == 0) {
        throw error;
      } else {
        let poll_id = results[0].id;
        knex('participants').insert({poll_id: poll_id}).returning("id").then(function(results) {
          let participant_id = results[0];
          res.cookie("participant_id", participant_id);
          res.redirect(`/rank/${poll_id}`);
        });
      }
  });
});

app.get("/rank/:poll_id", (req, res) => {
  let poll_id = req.params.poll_id;
  knex('polls').select('title', 'description').where({id: poll_id})
  .then(function(polls) {
     knex('choices').select('id', 'title', 'description').where({poll_id: poll_id})
     .then(function(choices) {
        res.render("poll_taking", {poll: polls[0],
                                  choices: choices});
     })
  })
});

/*
  { rankings: [ id1 id2 id3 id4 id5 ]}
*/

app.post("/rank/:poll_id", (req, res) => {

  console.log(req.body.ranking)
  var rankingsCreated = 0;

  var onAllComplete = function () {
    if (rankingsCreated === req.body.ranking.length){
     res.redirect(`/rank/${req.params.poll_id}/success`);
    }
  }

  req.body.ranking.forEach(function(choice_id, index){

     knex('rankings').insert({participant_id: req.cookies.participant_id,
                           choice_id: choice_id,
                           ranking: index
                         }).then(function(result) {
                          rankingsCreated += 1;
                          onAllComplete();
  });

  });


});

app.get("/rank/:participant_id/success", (req, res) => {
  res.render("poll_success");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});





  // knex.raw(`SELECT polls.id, rankings.choice_id, rankings.ranking, choices.title
  //           FROM polls
  //           JOIN choices ON choices.poll_id = polls.id
  //           JOIN rankings ON (rankings.choice_id = choices.id)
  //           WHERE polls.id = choices.poll_id`).then(function(results){
  //             console.log(results.rows);
  // //             console.log(results.rows);
  // //             var checkArr = [];
  // //             var finalObj = {};
  // //             var answer = {}
  // //             for(item of results.rows){
  // //               var finalArr = [];
  // //               if(checkArr.indexOf(item.choice_id) === -1){
  // //                 checkArr.push(item.choice_id);
  // //                 finalArr.push(item.ranking);
  // //                 finalObj[item.choice_id] = finalArr;
  // //               } else {
  // //                   finalObj[item.choice_id].push(item.ranking);
  // //               }
  // //               finalObj[item.choice_id].reduce(function(a, b){
  // //                 return a + b;
  // //               },0);
  // //             }
  // //             for (choice in finalObj) {
  // //               var finalScoreArr = finalObj[choice]
  // //               console.log(finalScoreArr);
  // //               answer[choice] = finalScoreArr.reduce((a, b) => a + b, 0);
  // //             }
  //             // console.log(answer);
  //             res.render("poll_results", {id: req.params.id});
  //           })
