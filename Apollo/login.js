RepList = []
ManList = []

function SalesP (ID ,fname, lname, bd, phone, region, pw, tc, ts) {
	this.ID = ID
    this.fname = fname,
	this.lname = lname,
    this.bd = bd,
    this.phone = phone,
    this.region = region,
    this.pw = pw,
    this.tc = tc,
    this.ts = ts;
}
function SalesM (ID ,fname, lname, bd, pw) {
	this.ID = ID
    this.fname = fname,
	this.lname = lname,
    this.bd = bd
    this.pw = pw
}
// Default Manager
ManList.push(new SalesM('ADMIN001',"Shaun","Cahill",new Date("2000-05-22"), "ADMIN"))

RepList.push(new SalesP("SR00001", "Apollo", "Lin", new Date("2000-09-23"), 1234567890, "Ottawa", "sample", 10000,10000));
RepList.push(new SalesP("SR00002", "Emily", "Chen", new Date("2000-06-25"), 2323454566, "Toronto", "HelloTest123", 10000,10000));

// write things into the local storage
function s_item(name,item){
    localStorage.setItem(name,JSON.stringify(item));
}

// retreive things from the local storage
function r_item(name,item){JSON.parse(localStorage.getItem("RepList"))

}
localStorage.setItem("RepList",JSON.stringify(RepList))
localStorage.setItem("RepList",JSON.stringify(RepList))


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
        redirect("Sales_Rep.html");
    } else if (auth_user(usernameL,passwordL,ManList) == true){
        redirect("Sales_Manager.html");
        return false;
    } else {
        alert("You have entered an invalid username or password");
    }}

