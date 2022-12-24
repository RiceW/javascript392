// JavaScript File
// reading everything from local storage
var RepList = s_read("RepList");
// creating the manager's list, if we had more time, we would have added functionarlity to add more managers
var ManList = []

// this is the manager's login
ManList.push(new SalesM("ADMIN", "Shaun", "Cahill", "", "ADMIN"))

if(RepList == null){
alert("There are no Reps yet, please login to manager page and add a rep first!");
}

// function written to check if the user ID is in the corresponding list, and if so return the password for that user
// this is supplementary to the login_button where it uses output to then authenticate user
function auth_user(username, password, ulist){
    const account = ulist.find(account => {
      return account.ID == username;
      });
    if(account === undefined){
        return false;
    } else {
        return account.pw == password;
    }}

// allows the user to login, checks through both list of managers and reps 
// doesn't matter which type of user you are the function will send you to the correct page :)
function login_button(){
    const usernameL = document.forms["login_form"]["uname"].value;
    const passwordL = document.forms["login_form"]["psw"].value;
    
    if (auth_user(usernameL,passwordL,ManList) == true){
        window.location = "Sales_Manager_Rep.html";}
        
    else if(auth_user(usernameL,passwordL,RepList) == true){
        s_save("username",usernameL);
        window.location ='Sales_Rep.html';
// if you entered a nonexistant info, it will alert you 
    } else {
        alert("You have entered an invalid username or password");
    }}

