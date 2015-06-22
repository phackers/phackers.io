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
    success: function(response) {
      if (response.ok === false) {
        var error_msg = response.error.split("_").join(" ");
        inviteButton.text(error_msg);
      } else if (response.ok === true) {
        inviteButton.text("Checked your email");
      }
    }
  });
});

function getTotalUsers() {
  var url = "https://phackers.slack.com/api/users.list?token=xoxp-3359469240-3368537646-3525848797-5d232a";
  $.ajax({
    type: "GET",
    url: url,
    success: function(response) {
      var totalUsers = response.members.length;
      var currentUsersTotal = $('.total-users').text(totalUsers);
    }
  })
}

getTotalUsers();