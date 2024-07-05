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

    else {
        displaymsg('first name is valid', 'fnameMsg', 'green')
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

    else {
        displaymsg('Last Name is valid', 'LnameMsg', 'green')
        return true
    }
}

function emailvalidate() {
    let input = document.getElementById('email').value
    if (input == '') {

        displaymsg('email is mandotory', 'emailMsg', 'red')
    }

    else if (!input.match(/^([a-zA-Z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])$/)) {
        displaymsg('someone@123.gmail.com', 'emailMsg', 'blue')
    }


    else {
        displaymsg('email is valid', 'emailMsg', 'green')
        return true
    }
}

function pwvalidate() {
    let input = document.getElementById('Password').value
    if (input == '') {

        displaymsg('Password is mandotory', 'PasswordMsg', 'red')
        return false
    }

    else if (!input.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/)) {
        displaymsg('Password must match the condition', 'PasswordMsg', 'red')
return false

    }

    else {
        displaymsg('Password is valid', 'PasswordMsg', 'green')
        return true
    }
}


function Cwvalidate() {
    let password = document.getElementById('Password').value
    let Cpassword = document.getElementById('Cpassword').value

    if (Cpassword == '') {
        displaymsg('confirm password is mandatory', 'Cpasswordmsg', 'red')
        return false
    }

    else if (password != Cpassword) {
        displaymsg('password and confirm must be same', 'Cpasswordmsg', 'red')
        return false
    }

    else {
        displaymsg('okay', 'Cpasswordmsg', 'green')

    }

    function submitform(){
        if ( fnamevalidate()&&Lnamevalidate()&&emailvalidate()&&pwvalidate()&&Cwvalidate()){
            return true
        }
        {
            return false
        }
            
    }
}



