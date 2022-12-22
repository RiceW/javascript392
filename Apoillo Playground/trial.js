// JavaScript File

var RepList = s_read("RepList");

function add_new_object(array,key,object){
    var rID = document.forms["myForm"]["rID"].value;
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var bd = document.forms["myForm"]["bd"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var region = document.forms["myForm"]["region"].value;
    var pw = document.forms["myForm"]["pw"].value;
    array.push(new object(rID, fname, lname, bd, phone, region, pw));
    s_save(key, array);
}

// function dynamicTable() {
//     var rID = document.forms["myForm"]["rID"].value;
//     var fname = document.forms["myForm"]["fname"].value;
//     var lname = document.forms["myForm"]["lname"].value;
//     var bd = document.forms["myForm"]["bd"].value;
//     var phone = document.forms["myForm"]["phone"].value;
//     var region = document.forms["myForm"]["region"].value;
//     var pw = document.forms["myForm"]["pw"].value;
//     document.getElementById("mytable").innerHTML += "<tr><td><input type ='text' value=" + rID + " " + "</input>"+"</td><td>"+fname+"</td><td>"+lname+"</td></tr>";
//     event.preventDefault();
// }

