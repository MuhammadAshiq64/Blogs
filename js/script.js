var username;
var email;
var password;
var conpassword;


function saveUser() {
    event.preventDefault()

    username = document.getElementById('name').value;
    email = document.getElementById('Enter-Email').value;
    password = document.getElementById('Enter-Password').value;
    conpassword = document.getElementById('Confirm-Password').value;

    const users = localStorage.getItem('users')
    let parsedUsers = [];
    if (users) {
        parsedUsers = JSON.parse(users)
    }
    error = false;
    if (password === conpassword) {
        for (var i = 0; i < parsedUsers.length; i++) {
            if (email === parsedUsers[i].email) {
                error = true;
                break;



            }

        }

        if (error === true) {
            console.log(parsedUsers[i].email)
            alert(email + " Already Have An Account." );
            
    username = document.getElementById('name').value='';
    email = document.getElementById('Enter-Email').value='';
    password = document.getElementById('Enter-Password').value='';
    conpassword = document.getElementById('Confirm-Password').value='';
            
        }
        else {
            var newUser = {
                name: username,
                email: email,
                password: password,
            }

            parsedUsers.push(newUser)
            localStorage.setItem('users', JSON.stringify(parsedUsers))
            alert('Account Created Succesfull\nplease login');
            
    username = document.getElementById('name').value='';
    email = document.getElementById('Enter-Email').value='';
    password = document.getElementById('Enter-Password').value='';
    conpassword = document.getElementById('Confirm-Password').value='';


        }

    }
    else {
        document.getElementById('accounterror').innerHTML = "Confirm password again";
    }


}


function openprofile() {
    var userPassword = document.getElementById('checkPassword').value;
    var userEmail = document.getElementById('checkEmail').value;
    const users = localStorage.getItem('users')
    let parsedUsers = [];
    if (users) {
        parsedUsers = JSON.parse(users)
    }
    // console.log(username);
    // console.log(emailFromLocalStorage);
    // console.log(password);
    // console.log(conpassword);


    if (parsedUsers.length !== 0) {
        var userFound = false;
        for (var i = 0; i < parsedUsers.length; i++) {
            console.log(parsedUsers[i].name)

            if (userEmail === parsedUsers[i].email && userPassword === parsedUsers[i].password) {
                localStorage.setItem('loggedInUser', parsedUsers[i].name)
                userFound = true;
                break;
            }

        }
        if (userFound) {
            console.log("tseting")
            window.location.href = "other files/home.html"
            
    username = document.getElementById('checkEmail').value='';
    email = document.getElementById('checkPassword').value='';
        }
        else {
            alert("Email/Password Not Match");

    username = document.getElementById('checkEmail').value='';
    email = document.getElementById('checkPassword').value='';
        }
    }
    event.preventDefault()
}




