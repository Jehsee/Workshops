$(document).ready(function(){
  $("form").submit(function(){
    if ($("#usernameInput").val() == "") {
      alert("You must input a User name")
      return false;
    }
    else  {
      alert("Username is good.")
    }
  })

  $("form").submit(function(){
    if ($("#passwordInput").val() == "12345") {
      alert("Password is good. You may enter.")
    }
    else  {
      alert("That is not the right password.")
      return false
    }
  })

  $("#usernameInput").keypress(function(event){
    var input = event.keyCode
    if (96<input && input<123) {
      $("h1").text("Letter")
    }
    else if (47<input && input<58) {
      $("h1").text("Number")
    };
  })
})