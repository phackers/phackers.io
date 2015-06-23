(function() {

  var inviteButton = $('.invite-button');
  var currentUsersTotal = $('.total-users');

  getTotalUsers();

  inviteButton.on("click", function() {
    var email = encodeURIComponent($(".invite-email").val());
    var time = new Date().getTime();
    var url = "https://" + subdomain + ".slack.com/api/users.admin.invite?t=" + time + "&email=" + email + "&token=" + token + "&set_active=true";

    $.ajax({
      type: "POST",
      url: url,
      success: function(response) {
        if (response.ok === false) {
          var error_msg = response.error.split("_").join(" ");
          inviteButton.text(error_msg);
        } else if (response.ok === true) {
          inviteButton.text("Check your email");
        }
      }
    });

  });

  function getTotalUsers() {
    var url = "https://evening-temple-9783.herokuapp.com/api/v1/users/";
    $.ajax({
      type: "GET",
      url: url,
      dataType: 'json',
      success: function(response) {
        currentUsersTotal.text(response);
      }
    });
  }

}());
