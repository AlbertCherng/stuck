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


