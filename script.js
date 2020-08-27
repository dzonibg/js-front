let response;
let token;
$(document).ready(function () {
    let content = "<p>Welcome to the API frontend homepage. From here, you can explore some of the functions" +
        " that the backend can provide you with. It's created for easier testing and further improvements in" +
        " real world scenarios.</p>";
    $("#content").append(content);
// data loading for static pages
   $("#linkHome").click(function () {
        $("#content").empty();
        $("#content").append(content);
   });

   $("#linkLogin").click(function (){
       $("#content").empty();
       $("#content").load("resources/loginForm.html");
   });

    $("#linkRegister").click(function (){
        $("#content").empty();
        $("#content").load("resources/registerForm.html");
    });
//end of static pages

    //login ajax request
    $(document).on("click", ("#buttonLogin"), function () {
        $("#loginResponse").text("Attempting to login.");
        console.log("Login button pressed.")
        $.ajax({
            url: 'https://jwt.nikola.eu.org/api/login',
            type: 'POST',
            dataType: 'json',
            accept: 'application/json',
            crossOrigin: true,
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            data: {
                email: $("#loginEmail").val(),
                password: $("#loginPassword").val()
            }
        }).done(function (data) {
            response = data;
            console.log(response.access_token);
            $("#loginResponse").text(data.message + " Welcome " + data.name);
            token = data.access_token;
            window.localStorage.setItem("token", token)
        });
    });

    //register ajax request
    //TODO clean this up a bit
    $(document).on("click", ("#buttonRegister"), function () {
        $("#loginResponse").text("Attempting to register.");
        console.log("Register button pressed.")
        $.ajax({
            url: 'https://jwt.nikola.eu.org/api/register',
            type: 'POST',
            dataType: 'json',
            accept: 'application/json',
            crossOrigin: true,
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            data: {
                email: $("#loginEmail").val(),
                password: $("#loginPassword").val(),
                name: $("#loginName").val()
            }
        }).done(function (data) {
            response = data;
            console.log(response.access_token);
            $("#loginResponse").text(data.message);
            token = data.access_token;
            window.localStorage.setItem("token", token)
        });
    });

});