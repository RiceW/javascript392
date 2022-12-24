// JavaScript File
// reading everything from local storage
var RepList = s_read("RepList");
var DealsList = s_read("DealsList");
// identifies which rep is logged in
var username = s_read("username");

// adding a placeholder when the array is empty to prevent code from breaking
if(DealsList == null){
    var DealsList = [];
    const placeholder = {a:"You found me!"};
    DealsList.push(placeholder);
    s_save("DealsList", DealsList)
}

// Add new deals using the form on the HTML
function add_new_object(array,key,object){
    var dealID = document.forms["myForm"]["dealID"].value;
    // var repID = document.forms["myForm"]["rID"].value;
    // this is depreicated because we were able to dynamically link the repID to the login ID :)
    var repID = username;
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
// returns the name of the rep based on their ID
function rep_info(uname, property){
    const account = RepList.find(account => {
      return account.ID == uname;
      });
    if(account === undefined){
        return false;
    }else if(property == "name"){
        return account.fname + " " + account.lname;
    } else {
        return account[property];
    }}
    
// this is used to hold temperorary information of individual reps, this allows the table to only display a portion of the master list
var temp = []

// make sure the rep only sees their OWN deals
function view_rep_deal(){
    var repID = username
    const placeholder = {a:"You found me!"};
    temp = DealsList.filter(deal => deal.repID == repID);
// pushing placeholder to the top so error will be caught in build table
    temp.unshift(placeholder);
    s_save("temp",temp);
    build_table('mytable', temp, 'Deal');
}

