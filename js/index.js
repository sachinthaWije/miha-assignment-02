function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(window.localStorage.getItem('user'));
    if (username === "" && password === "") {
        alert("Enter username and password fields.");
    } else if (username === "") {
        alert("Enter username field.");
    } else if (password === "") {
        alert("Enter password field.");
    } else {
        if (window.localStorage.getItem('user') !== null) {
            var json = JSON.parse(window.localStorage.getItem('user'));
            if (username === json.username && password === json.password) {
                window.location.href = "home.html";
            } else {
                alert("Invalid username or password.");
            }
        } else {
            alert("Not Found User. Please SING UP first.");
        }
    }
}
function createUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" && password === "") {
        alert("Enter username and password fields.");
    } else if (username === "") {
        alert("Enter username field.");
    } else if (password === "") {
        alert("Enter password field.");
    } else {
        const user = {
            username: username,
            password: password,
        }

        window.localStorage.setItem('user', JSON.stringify(user));
        alert("Successfully Created.");
        location.reload();

    }
}

function logout(){
    window.localStorage.clear();
    window.location.href = "login.html";
}