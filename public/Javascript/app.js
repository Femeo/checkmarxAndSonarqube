window.onload = function(){
    console.log(document.getElementById('username').placeholder)
    function login(){
        alert("stop")
        console.log("now");
        var username = document.getElementById('username');

        var password = document.getElementById("password");
        var usernameConfirmed = $.get('/availableUsernames').done(function(usernameResult){
            if(username == usernameResult[0]){
                return true;
            }
            return false;
        })
        var passwordConfirmed = $.get('availablePasswords').done(function(passwordResult){
            return true;
        })
        if( usernameConfirmed == true && passwordConfirmed == true){
            alert("login successful");
            window.location = "success.html";
            return false;
        }
        else{
            console.log(document.getElementById("password") + "this");
            alert("incorrect username or password, please try again");
            document.getElementById('username').textContent = "";
            // $("#username").val(""); <= Consider for shorter code
            document.getElementById('password').textContent = "";
            // $("#password").val("");
        }
    }
}
