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