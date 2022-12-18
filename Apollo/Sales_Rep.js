var username 
var RepList
var DealsList

// reading from localstroage
username = r_item("username")
RepList = r_item("RepList")
DealsList = r_item("DealsList")

var helper

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

document.getElementById("greeting").innerHTML = "Welcome Back" + " " + rep_info(username, "name");
document.getElementById("totals").innerHTML = "  " + rep_info(username,"ts");
document.getElementById("totalc").innerHTML = "  " + rep_info(username,"tc");