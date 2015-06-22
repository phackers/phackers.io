// var invite_button = $('.invite-button');


// function invite_user(email, time, token) {
//   var url = "https://teamgalit.slack.com/api/users.admin.invite?t=" + time +"&email="+ email +"&token="+ token + "&set_active=true";
//   $.ajax({
//     type: "POST",
//     url: url,
//     success: function() { alert("success!"); }
//   });
// }

// invite_button.on("click", invite_user());

var inviteButton = $('.invite-button');
inviteButton.on('click', function() {
  var email = encodeURIComponent($('.invite_email').val());
  var time = (new Date).getTime();
  var token = "xoxs-6691027749-6690822983-6690897668-1e8900f98c";
  var url = "https://teamgalit.slack.com/api/users.admin.invite?t=" + time +"&email="+ email +"&token="+ token + "&set_active=true";
  // $.ajax({
  //   type: "POST",
  //   url: url,
  //   success: function() { alert("check your email!"); }
  // });

  $.post(url, function() {
  }).done(function() {
    alert("success");
  }).fail(function(error) {
    alert(error);
  });
});