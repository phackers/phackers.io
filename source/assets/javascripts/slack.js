(function() {

  var inviteButton = $('.invite-button');
  var email = encodeURIComponent($(".invite-email").val());
  var time = new Date().getTime();
  var token = "xoxp-3359469240-3368537646-3525848797-5d232a";
  var subdomain = "phackers";
  var currentUsersTotal = $('.total-users');

  getTotalUsers();

  inviteButton.on("click", function() {

    var url = "https://" + subdomain + ".slack.com/api/users.admin.invite?t=" + time + "&email=" + email + "&token=" + token + "&set_active=true";

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
    var url = "https://" + subdomain + ".slack.com/api/users.list?token=" + token;
    $.ajax({
      type: "GET",
      url: url,
      success: function(response) {
        var totalUsers = response.members.length;
        currentUsersTotal.text(totalUsers);
      }
    });
  }

}());
