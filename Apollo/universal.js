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

// bname is business name, c1n is contact one name, c1p is contact one phone, dsizem is monetary deal size, dsizeu is deal size in numebr of users,
// sdate is start date, c date is close date, stage is which stage the deal is in, notes is any additional notes or deal closed reason
function Deals (dealID, repID, bname, c1n, c1p, c2n, c2n, dtype, dsizem, dsizeu, sdate, cdate, stage, notes) {
	this.dealID = dealID
    this.repID = repID
    this.bname = bname,
	this.c1n = c1n,
    this.c1p = c1p,
    this.c2n = c2n,
    this.c2p = c2p,
    this.dtype = dtype
    this.dsizep = dsizem
    this.dsizep = dsizeu
    this.sdate = sdate
    this.cdate = cdate
    this.stage = stage
    this.notes = notes
}
// Default Manager
ManList.push(new SalesM('ADMIN001',"Shaun","Cahill",new Date("2000-05-22"), "ADMIN"))

// Pre-loaded SalesReps
RepList.push(new SalesP("SR00001", "Apollo", "Lin", new Date("2000-09-23"), 1234567890, "Ottawa", "sample", 10000,10000));
RepList.push(new SalesP("SR00002", "Emily", "Chen", new Date("2000-06-25"), 2323454566, "Toronto", "HelloTest123", 10000,10000));

// write things into the local storage
function s_item(name,item){
    localStorage.setItem(name,JSON.stringify(item));
}

// retreive things from the local storage
function r_item(name){
    JSON.parse(localStorage.getItem("name");


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

