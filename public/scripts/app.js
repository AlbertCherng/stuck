$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});


function loadPoll() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/tweets",
    success: function(data) {
      renderPoll(data)
    }
  });
}


function loadChoices() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/tweets",
    success: function(data) {
      renderChoices(data)
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

function createTweetElement(tweet) {
  var html = `<article>
                <header class="tweet-header">
                  <img src="${tweet.user.avatars.small}" class="user-image">
                  <p class="user-name">${tweet.user.name}</p>
                  <p class="user-handle">${tweet.user.handle}</p>
                </header>
                <section class="tweet-body">
                  ${tweet.content.text}
                </section>
                <footer class="tweet-footer">
                  <p class="post-date"> ${tweet.created_at} </p>
                  <span class="icons" id="iconspan">
                    <i class="fa fa-font-awesome" aria-hidden="true"></i>
                    <i class="fa fa-retweet" aria-hidden="true"></i>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </span>
                </footer>
              </article>`
  return $(html);
}

$(function() {
  $("#tweetForm").submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: $(this).serialize(),
      success: function(res) {
        console.log(res);
        $("#tweetForm")[0].reset();
        $(".counter").text(140);
        loadTweets();
      }
    });
  };
  });
  loadPoll();
  loadChoices();
});
