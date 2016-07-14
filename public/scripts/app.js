$(function() {

  $("#enterEmail").submit(function(event){
  });

  $( "#pollTitle" ).blur(function() { //on blur
    console.log("Working!");
    var title = $(this).val();
    $.ajax({
      type: "PUT",
      url: "/polls/:id",
      data: {title: title}
    });
  })

})
function createParticipant(participant) {
  return $(`<div class="row">
  <div class="col-md-4 col-md-offset-3">
    <div class="form-group">
      <input type="email" class="form-control" name="participants[<%= participant.id %>][title]" placeholder="enter email" value="<%= participant.email %>">
    </div>
  </div>
</div>`);
}

function createChoice(choice) {
  return $(`<div class="row">
    <div class="col-md-4 col-md-offset-3">
      <div class="form-group">
        <input type="text" class="form-control" name="choices[<%= choice.id %>][title]" placeholder="Choice 1" value="<%= choice.title %>">
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4 col-md-offset-3">
    <div class="form-group">
      <textarea class="form-control" rows="2" name="choices[<%= choice.id %>][description]" placeholder="Uh huh uh huh, makes sense."><%= choice.description %></textarea>
    </div>
  </div>
</div>`);
}
  //   console.log("Keyup working!");
  // });

  // $( "#pollDescription" ).keyup(function(title) {
  //   $.ajax({
  //     type: "POST",
  //     url: "/polls",
  //   });

  //   console.log("Keyup working!");
  // });

  $( "#choices input[type=text]" ).keyup(function() {
    var choice = $(this).val();
    $.ajax({
      type: "POST",
      url: "/polls",
      data: {title: choice}
    });
    console.log("Keyup working for choice 1!!");
  });

  // $( "#choice2" ).keyup(function() {
  //   $.ajax({
  //     type: "POST",
  //     url: "/polls",
  //   });
  //   console.log("Keyup working for choice 2!!");
  // });

  // $( "#choice3" ).keyup(function() {
  //   $.ajax({
  //     type: "POST",
  //     url: "/polls",
  //   });
  //   console.log("Keyup working for choice 3!!");
  // });

  // $( "#choice4" ).keyup(function() {
  //   $.ajax({
  //     type: "POST",
  //     url: "/polls",
  //   });
  //   console.log("Keyup working for choice 4!!");
  // });

  // $( "#choice5" ).keyup(function() {
  //   $.ajax({
  //     type: "POST",
  //     url: "/polls",
  //   });
  //   console.log("Keyup working for choice 5!!");
  // });


