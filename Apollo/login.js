// JavaScript File

var x;

function firstLastName() {
    var fname = document.forms["login_form"]["uname"].value;
    var lname = document.forms["login_form"]["psw"].value;
    document.getElementById("hello").innerHTML = ("Hello " + fname + " " + lname)
return false
    
}

