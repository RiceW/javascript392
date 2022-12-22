var RepList = []
var ManList = []
var DealsList = []

function SalesP (ID ,fname, lname, bd, phone, region, pw, tc=null, ts=null) {
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
function Deals (dealID, repID, bname, c1n, c1p, c2n=null, c2p=null, dtype, dsizem, dsizeu, sdate, cdate, stage, notes=null) {
	this.dealID = dealID
    this.repID = repID
    this.bname = bname,
	this.c1n = c1n,
    this.c1p = c1p,
    this.c2n = c2n,
    this.c2p = c2p,
    this.dtype = dtype
    this.dsizem = dsizem
    this.dsizeu = dsizeu
    this.sdate = sdate
    this.cdate = cdate
    this.stage = stage
    this.notes = notes
}

// dealstage enumerator allows easier input of deal stages
const dealstage = {
    a: "Awareness",
    b: "Interest",
    c: "Consideration",
    d: "Intent",
    e: "Evaluation",
    f: "Purchase",
    g: "Closed"
}


//dealtype enumerator allows easier input of deal types
const dealtype = {
    a: "Educational",
    b: "Corporate"
}

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
      
// Default Manager
ManList.push(new SalesM('ADMIN001',"Shaun","Cahill",new Date("2000-05-22"), "ADMIN"));

// Pre-loaded SalesReps
RepList.push(new SalesP("SR00001", "Apollo", "Lin", new Date("2000-09-23"), 1234567890, "Ottawa", "sample",100,1000));
RepList.push(new SalesP("SR00002", "Emily", "Chen", new Date("2000-06-25"), 2323454566, "Toronto", "HelloTest123", 1000,25000));

var today = new Date();
var tomorrow = new Date("2022-1-18");
// Pre-loaded Deals
DealsList.push(new Deals("000001", "SR00001", "Queen's University", "John Doe", 3439990000,"","",dealtype.a,2500,50,today,today.setDate(today.getDate() + 30), dealstage.a,"this is a sample"));
DealsList.push(new Deals("000001", "SR00001", "Carelton Universlity", "John Doe", 3439990000,"","",dealtype.a,7000,50,today,today.setDate(today.getDate() + 30), dealstage.b,"this is a sample"));
// write things into the local storage
function s_item(name,item){
    window.localStorage.setItem(name,JSON.stringify(item));
}

// retreive things from the local storage
function r_item(name){
    return JSON.parse(window.localStorage.getItem(name));
}

s_item("RepList", RepList)
s_item("ManList", ManList)
s_item("DealsList", DealsList)



