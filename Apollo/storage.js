// JavaScript File for Storing all the Objects
// ID is used as the username, bd is birthday, pw is password, tc is total commision, ts is total sales
RepList = []

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

function dis_rep(){
    RepList.push(new SalesP("SR00001", "Jeff", "Zhang", 2000/09/23, 343-333-6128, "Ottawa", "HelloTest123", 10000,10000));
    document.getElementById("hello").innerHTML = RepList[0].value;
return false
}




function SalesM (ID ,fname, lname, bd, pw) {
	this.ID = ID
    this.fname = fname,
	this.lname = lname,
    this.bd = bd
    this.pw = pw
}

ADMIN001
ADMIN

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

// dealstage enumerator allows easier input of deal stages
const dealstage = {
    Awareness = 0,
    Interest = 1,
    Consideration = 2,
    Intent = 3,
    Evaluation = 4,
    Purchase = 5,
    Closed = 6
}


//dealtype enumerator allows easier input of deal types
const dealtype = {
    Educational = 0,
    Coporate = 1,
}