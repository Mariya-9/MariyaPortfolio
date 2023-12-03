//contact form
$("#contact-form").submit(function () {
  var action = $(this).attr("action");

  $("#message").slideUp(750, function () {
    $("#message").hide();

    $("#submit").before("").attr("disabled", "disabled");

    $.post(
      action,
      {
        name: $("#name").val(),
        email: $("#email").val(),
        comments: $("#comments").val(),
      },
      function (data) {
        document.getElementById("message").innerHTML = data;
        $("#message").slideDown("slow");
        $("#cform img.contact-loader").fadeOut("slow", function () {
          $(this).remove();
        });
        $("#submit").removeAttr("disabled");
        if (data.match("success") != null) $("#cform").slideUp("slow");
      }
    );
  });

  return false;
});

// function validateForm() {
//   var name = document.forms["myForm"]["name"];
//   var email = document.forms["myForm"]["email"];
//   var message = document.forms["myForm"]["message"];

//   if (name.value == "") {
//     document.getElementById("errorname").innerHTML =
//       "Please enter a valid name";
//     name.focus();
//     return false;
//   } else {
//     document.getElementById("errorname").innerHTML = "";
//   }

//   if (email.value == "") {
//     document.getElementById("erroremail").innerHTML =
//       "Please enter a valid email address";
//     email.focus();
//     return false;
//   } else {
//     document.getElementById("erroremail").innerHTML = "";
//   }

//   if (email.value.indexOf("@", 0) < 0) {
//     document.getElementById("erroremail").innerHTML =
//       "Please enter a valid email address";
//     email.focus();
//     return false;
//   }

//   if (email.value.indexOf(".", 0) < 0) {
//     document.getElementById("erroremail").innerHTML =
//       "Please enter a valid email address";
//     email.focus();
//     return false;
//   }

//   if (message.value == "") {
//     document.getElementById("errormsg").innerHTML =
//       "Please enter a valid message";
//     message.focus();
//     return false;
//   } else {
//     document.getElementById("errormsg").innerHTML = "";
//   }

//   return true;
// }
