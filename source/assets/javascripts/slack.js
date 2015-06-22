var inviteButton = $('.invite-button');

inviteButton.on('click', function() {
  var email = encodeURIComponent($('.invite-email').val());
  var time = (new Date).getTime();
  var token = "xoxp-3359469240-3368537646-3525848797-5d232a";
  var subdomain = "phackers";
  var url = "https://" + subdomain + ".slack.com/api/users.admin.invite?t=" + time +"&email="+ email +"&token="+ token + "&set_active=true";
  $.ajax({
    type: "POST",
    url: url,
    success: function() { alert("check your email!"); }
  });
});