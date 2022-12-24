// JavaScript File

var RepList = s_read("RepList");
var ManList = []
ManList.push(new SalesM("ADMIN", "Shaun", "Cahill", "", "ADMIN"))

if(RepList == null){
alert("There are no Reps yet, please login to manager page and add a rep first!");
}

function auth_user(username, password, ulist){

    const account = ulist.find(account => {
      return account.ID == username;
      });
    if(account === undefined){
        return false;
    } else {
        return account.pw == password;
    }}
    
console.log(RepList)

function submit_button(){

    const usernameL = document.forms["login_form"]["uname"].value;
    const passwordL = document.forms["login_form"]["psw"].value;
    
    if (auth_user(usernameL,passwordL,ManList) == true){
        window.location ='Sales_Rep.html';
        window.location = "Sales_Manager_Rep.html";}
        
    else if(auth_user(usernameL,passwordL,RepList) == true){
        s_save("username",usernameL);
        window.location ='Sales_Rep.html';
    } else {
        alert("You have entered an invalid username or password");
    }}

