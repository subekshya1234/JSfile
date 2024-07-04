function displaymsg(msg, idname, colorname) {
    document.getElementById(idname).innerHTML = msg
    document.getElementById(idname).style.color = colorname
}


function fnamevalidate() {
    let input = document.getElementById('fname').value
    if (input == '') {

        displaymsg('first name is mandotory', 'fnameMsg', 'red')
    }

    else if (input.length < 3) {
        displaymsg('first name should be more than 3 characters', 'fnameMsg', 'red')
        return false
    }

    else{
        displaymsg('first name is valid','fnameMsg','green')
        return true
    }
}

// LAST NAME
function Lnamevalidate() {
    let input = document.getElementById('Lname').value
    if (input == '') {

        displaymsg('Last Name is mandotory', 'LnameMsg', 'red')
    }

    else if (input.length < 3) {
        displaymsg('Last Name should be more than 3 characters', 'LnameMsg', 'red')
        return false
    }

    else{
        displaymsg('Last Name is valid','LnameMsg','green')
        return true
    }
}

function emailvalidate() {
    let input = document.getElementById('email').value
    if (input == '') {

        displaymsg('email is mandotory', 'emailMsg', 'red')
    }

    else if(!input.match(/^([a-zA-Z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])$/)){
        displaymsg('someone@123.gmail.com','emailMsg','blue')
    }


    else{
        displaymsg('email is valid','emailMsg','green')
        return true
    }
}

function Passwordvalidate() {
    let input = document.getElementById('Password').value
    if (input == '') {

        displaymsg('Passwordf is mandotory', 'PasswordMsg', 'red')
    }

    else if(!input.match(/(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/)){
        displaymsg('someone@123.gmail.com','emailMsg','blue')
    }     


    else{
        displaymsg('Password is valid','PasswordMsg','green')
        return true
    }
}



