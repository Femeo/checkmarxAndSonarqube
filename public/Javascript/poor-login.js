var main = function(){
    var username = "username",
        password = "password";

    function login() {
        if ($("#username").val === username && $("#username").val === password) {
            window.location = "success.html";
        }
    }

    $("#submit").click(login());

}

$(document).ready(main);