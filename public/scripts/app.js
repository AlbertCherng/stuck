$(function() {

  $("#enterEmail").submit(function(event){
  });

  $( ".poll" ).on("keyup", function() {
    $.ajax({
      method: "PUT",
      url: "./",
      data: $("form").serialize()
    });
  })
})

function createParticipant() {
  let index =  $(".poll .participant").length;
  return $(`<div class="participant">
              <div class="row">
                <div class="col-md-4 col-md-offset-3">
                  <div class="form-group">
                    <input type="email" class="form-control" name="poll[participants][${index}][email]" placeholder="enter email" value="">
                  </div>
                </div>
              </div>
            </div>`);
}

function createChoice() {
  let index = $(".poll .choice").length;
  return $(`<div class="choice">
              <div class="row">
                <div class="col-md-4 col-md-offset-3">
                  <div class="form-group">
                    <input type="text" class="form-control" name="poll[choices][${index}][title]" placeholder="Choice" value="">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-md-offset-3">
                  <div class="form-group">
                    <textarea class="form-control" rows="2" name="poll[choices][${index}][description]" placeholder="Uh huh uh huh, makes sense."></textarea>
                  </div>
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
<<<<<<< HEAD
=======

$( "#sortable" ).sortable();
$( "#sortable" ).disableSelection();

$('#takePoll').submit(function(event) {

  $('.ranking').each(function(index, elem) {
    $(elem).attr("name", `ranking[${index}]`);
  });

});


>>>>>>> results-page
});



