

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

function redirect(url){
    window.history.pushState("", "", url);
    window.location.reload();
}

function submit_button(){

    const usernameL = document.forms["login_form"]["uname"].value;
    const passwordL = document.forms["login_form"]["psw"].value;

    if(auth_user(usernameL,passwordL,RepList) == true){
        s_item("username",usernameL);
        location='Change_Password.html';
        event.preventDefault();
    } else if (auth_user(usernameL,passwordL,ManList) == true){
        location = "Old_Sales_Rep.html";
        event.preventDefault();
    } else {
        alert("You have entered an invalid username or password");
        event.preventDefault();
    }}

