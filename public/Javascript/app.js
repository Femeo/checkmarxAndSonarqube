function login(){
    var username = document.getElementById('username');
    var password = document.getElementById("password");
    $.get('/availableUsernames').done(function(usernameResult){
        console.log(usernameResult)
    })
    $.get('availablePasswords').done(function(passwordResult){
        console.log(passwordResult)
    })
    if( username == "root" & password == "pa55w0rd"){
        alert("login successful");
        window.location = "success.html";
        return false;
    }
    else{
        alert("incorrect username or password, please try again");
        document.getElementById('username').textContent = "";
        document.getElementById('password').textContent = "";
        return false;
    }
}