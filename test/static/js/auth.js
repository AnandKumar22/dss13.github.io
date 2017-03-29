// NOTE: Make changes in the templates wherever instances of NOTE found
var username = localStorage.getItem('username');
var url = window.location.pathname;
console.log(url);

if(username) {
    if (url == '/login/' | url =='/signup/' ){
        window.location.href = '/';
    }
}
else if (url == '/') {
    window.location.href = '/login/';
}

function login() {
    var form = document.getElementById('login');
    var token = form.elements[0].value;
    var username = form.elements[1].value;
    var password = form.elements[2].value;

    $.ajax({
            url:'https://ktj.in/api/myktj/login/',
            dataType:'json',
            type:'POST',
            async:false,
            contentType:'application/x-www-form-urlencoded',
            data:{'csrftoken':token, 'username': username, 'password': password},
            success: function(response) {
                $("#options").hide();
                localStorage.setItem('username', response.username);
                // NOTE
                $("#login").html("<center><div style='color:#4bb8eb;margin-top:48%;'>" + response.username + ", You are logged in!!</div></center>");
                window.location.href = '/';

            },
            error: function(response) {
                // NOTE
                $("#login_error").html("<br><span style='color:red;'>"+ response.responseText +"</span>");
                console.log(response.status);
            }
        });
};

function getUserDetail(username) {
    $.ajax({
            url:'https://ktj.in/api/myktj/user/' + username + '/',
            dataType:'json',
            async:false,
            contentType:'application/x-www-form-urlencoded',
            success: function(response) {
                regDate = response.date_joined;
                user = response.id;
            },
            error: function(response) {
                console.log(response.status);
            }
        });
};
