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
  //   console.log("Keyup working!");
  // });

  // $( "#pollDescription" ).keyup(function(title) {
  //   $.ajax({
  //     type: "POST",
  //     url: "/polls",
  //   });

  //   console.log("Keyup working!");
  // });

  // $( "#choice1" ).keyup(function() {
  //   $.ajax({
  //     type: "POST",
  //     url: "/polls",
  //   });
  //   console.log("Keyup working for choice 1!!");
  // });

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


