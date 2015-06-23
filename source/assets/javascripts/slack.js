(function() {

  var inviteButton = $('.invite-button');
  var currentUsersTotal = $('.total-users');

  getTotalUsers();

  inviteButton.on("click", function() {
    var email = encodeURIComponent($(".invite-email").val());
    var time = new Date().getTime();
    var url = "https://evening-temple-9783.herokuapp.com/api/v1/invite/";
    // var url = "http://localhost:8888/api/v1/invite/";

    $.ajax({
      type: "POST",
      data:{email: email, time: time},
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
