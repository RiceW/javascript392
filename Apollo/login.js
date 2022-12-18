// JavaScript File

var x;

function firstLastName() {
    var fname = document.forms["login_form"]["uname"].value;
    var lname = document.forms["login_form"]["psw"].value;
    console.log("Hello " + fname + " " + lname);
return false
    
}

firstLastName()