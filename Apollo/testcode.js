
//alert(checkLogin(usernameL, passwordL));

function auth_user(username, password, ulist){

    const account = ulist.find(account => {
      return account.ID == username;
      });
    if(account === undefined){
        return false;
    } else {
        return account.pw == password;
    }}

function redirect(url){
    window.history.pushState("", "", url);
    window.location.reload();
}

function submit_button(){

    const usernameL = document.forms["login_form"]["uname"].value;
    const passwordL = document.forms["login_form"]["psw"].value;

    if(auth_user(usernameL,passwordL,RepList) == true){
        s_item("username",usernameL)
        redirect("Sales_Rep.html");
    } else if (auth_user(usernameL,passwordL,ManList) == true){
        redirect("Sales_Manager.html");
        return false;
    } else {
        alert("You have entered an invalid username or password");
    }}

