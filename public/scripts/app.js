$(function() {

  $("#enterEmail").submit(function(event){
  });

  $( "#poll_edit input[type=text]" ).on("keyup", function() {
    // var id = $(this).data-poll-id
    $.ajax({
      method: "PUT",
      url: "./",
      data: $("form").serialize()
    });
  })
})
function createParticipant() {
  return $(`<div class="row">
  <div class="col-md-4 col-md-offset-3">
    <div class="form-group">
      <input type="email" class="form-control" name="participants[][email]" placeholder="enter email" value="">
    </div>
  </div>
</div>`);
}

function createChoice() {
  return $(`<div class="row">
    <div class="col-md-4 col-md-offset-3">
      <div class="form-group">
        <input type="text" class="form-control" name="choices[][title]" placeholder="Choice" value="">
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4 col-md-offset-3">
    <div class="form-group">
      <textarea class="form-control" rows="2" name="choices[][description]" placeholder="Uh huh uh huh, makes sense."></textarea>
    </div>
  </div>
</div>`);
}

$(document).ready(function() {

  $('.addChoice').click(function(event) {
    createChoice().appendTo('.choices');
  });

 $('.addParticipant').click(function(event) {
   createParticipant().appendTo('.participants');
});

});



