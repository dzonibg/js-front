let response;
$(document).ready(function () {
    $("#btn-register").click(function () {
        let email = $("#email").val()
        let name = $("#name").val()
        let password = $("#password").val()
        let token;
        $.ajax({
            url: 'http://jwt.nikola.eu.org/api/register',
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
                email: email,
                name: name,
                password: password
            }
        }).done(function (data) {
            response = data;
            console.log(response.access_token);
            $("#token").text(data.access_token);
            token = data.access_token;
            window.localStorage.setItem("token", token)
        });
    });

    $("#showToken").click(function() {
        alert(window.localStorage.getItem("token"));
    });

    $("#showInfo").click(function () {
        let token = window.localStorage.getItem("token");

        $("#userInfo").empty();

        $.ajax({
            url: 'http://jwt.nikola.eu.org/api/user',
            type: "POST",
            dataType: "json",
            accept: "application/json",
            crossOrigin: true,
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Authorization": 'Bearer ' + token,
            },
        }).done(function (data) {
            console.log(data)
            $("#userInfo").append("<p>Name: " + data.name + "</p>");
            $("#userInfo").append("<p>Email: " + data.email + "</p>");
        });
    });
});