const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);

function loadPoll() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/tweets",
    success: function(data) {
      renderPoll(data)
    }
  });
}

function renderPoll(tweets) {
  var $tweets = $('.posted-tweets').empty();
  for (index in tweets) {
    $tweets.append(createTweetElement(tweets[index]));
  };
}

function renderChoices(tweets) {
  var $tweets = $('.posted-tweets').empty();
  for (index in tweets) {
    $tweets.append(createTweetElement(tweets[index]));
  };
}

$(function() {

$("#enterEmail").submit(function(event){
  $.ajax({
    type: "POST",
    url: "/polls",
  });
});

$( "#pollTitle" ).keyup(function(title) {
  knex("polls").where("id", 12)
  .update({name: title})
  console.log("Keyup working!");
});

$( "#pollDescription" ).keyup(function(title) {
  knex("polls").where("id", 12)
  .update({name: title})
  console.log("Keyup working!");
});

$( "#choice1" ).keyup(function() {
  console.log("Keyup working for choice 1!!");
});

$( "#choice2" ).keyup(function() {
  console.log("Keyup working for choice 2!!");
});

$( "#choice3" ).keyup(function() {
  console.log("Keyup working for choice 3!!");
});

$( "#choice4" ).keyup(function() {
  console.log("Keyup working for choice 4!!");
});

$( "#choice5" ).keyup(function() {
  console.log("Keyup working for choice 5!!");
});

})
