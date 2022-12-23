// JavaScript File


var DealsList = s_read("DealsList")

if(DealsList == null){
    var DealsList = [];
    const placeholder = {a:"You found me!"};
    DealsList.push(placeholder);
    s_save("DealsList", DealsList)
}

function add_new_object(array,key,object){
    var dealID = document.forms["myForm"]["dealID"].value;
    var repID = document.forms["myForm"]["rID"].value;
    var bname = document.forms["myForm"]["bname"].value;
    var c1n = document.forms["myForm"]["c1n"].value;
    var c1p = document.forms["myForm"]["c1p"].value;
    var c2n = document.forms["myForm"]["c2n"].value;
    var c2p = document.forms["myForm"]["c2p"].value;    
    var dtype = document.forms["myForm"]["dtype"].value;
    var dsizem = document.forms["myForm"]["dsizem"].value;
    var dsizeu = document.forms["myForm"]["dsizeu"].value;
    var sdate = document.forms["myForm"]["sdate"].value;
    var cdate = document.forms["myForm"]["cdate"].value;
    var stage = document.forms["myForm"]["stage"].value;
    var note = document.forms["myForm"]["notes"].value;
    array.push(new object(dealID,repID,bname,c1n,c1p,c2n,c2p,dtype,dsizem,dsizeu,sdate,cdate,stage,note));
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

