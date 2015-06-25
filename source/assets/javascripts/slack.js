(function() {

  var inviteButton = $('.invite-button');
  var currentUsersTotal = $('.total-users');

  getTotalUsers();

  inviteButton.on("click", function() {
    var email = $(".invite-email").val();
    var time = new Date().getTime();
    var url = "https://phackers-proxy.herokuapp.com/api/v1/invite/";

    $.ajax({
      type: "POST",
      data:{email: email},
      url: url,
      dataType: 'json',
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
    var url = "https://phackers-proxy.herokuapp.com/api/v1/users/";
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
