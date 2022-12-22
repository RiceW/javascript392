var RepList = []
var ManList = []
var DealsList = []

function SalesP (ID ,fname, lname, bd, phone, region, pw, tc=0, ts=0) {
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

// this function saves into the local storage, key in string format
function s_save(key, item){
    window.localStorage.setItem(key, JSON.stringify(item));
}

function s_read(key){
    return JSON.parse(window.localStorage.getItem(key));
}

// to be used in conjunction with build_table
// p_num is the index of the property e.g. 1,2 must be number
function i_p(array, row_count, p_num){
    return Object.values(array[row_count])[p_num];
}

// fetch cell content
// table is table, r_num is which row in the table, c_number is which cell has to be a number
function f_c_i(table, r_num, c_num){
    return table.rows[r_num].cells[c_num].firstChild.value;
}

// table id is in string format, array is the list of objects, p_num is number of properties
function build_table(tableid, array, type){
    console.log(array);
    var row_count = 1;
    if(array.length == 1){
        alert("<p>There is no data yet!</p>");
    }
    else {
        while (row_count < array.length){
                document.getElementById(tableid).innerHTML += "<tr><td><input type ='text' value=" + i_p(array,row_count,0) + " " + "</input>"+ "</td><td>" + "<input type ='text' value=" + i_p(array,row_count,1) + " " + "</input>" +  "</td><td>" + "<input type ='text' value=" + i_p(array,row_count,2) + " " + "</input>" + "</td><td>" + "<input type ='date' value=" + i_p(array,row_count,3) + " " + "</input>"+ "</td><td>" + "<input type ='number' value=" + i_p(array,row_count,4) + " " + "</input>"+ "</td><td>" + "<input type ='text' value=" + i_p(array,row_count,5) + " " + "</input>"+ "</td><td>" + "<input type ='text' value=" + i_p(array,row_count,6) + " " + "</input>"+ "</td><td>" + "<input type ='number' value=" + i_p(array,row_count,7) + " " + "</input>"+ "</td><td>" + "<input type ='number' value=" + i_p(array,row_count,8) + " " + "</input>"+"</td></tr>";
            row_count +=1
        }
    }
}

// converted edited table and store into local storage
// type will determine which constructor to call
function con_table(tableid, key, type){
    var newarray= [];
    var row_count = 0;
    var table = document.getElementById(tableid);
    console.log(table)
    var totalRowCount = table.rows.length;
    
    if (type === "Rep"){
        while(row_count < totalRowCount){
            newarray.push(new SalesP(f_c_i(table,row_count,0),f_c_i(table,row_count,1),f_c_i(table,row_count,2),f_c_i(table,row_count,3),f_c_i(table,row_count,4),f_c_i(table,row_count,5),f_c_i(table,row_count,6),f_c_i(table,row_count,7),f_c_i(table,row_count,8)));
            row_count += 1;
            s_save(key, newarray);
            window.location.reload();
        }
    } else if (type === "Deal"){
        while(row_count <= totalRowCount){
            newarray.push(new Deals(f_c_i(table,row_count,0),f_c_i(table,row_count,1),f_c_i(table,row_count,2),f_c_i(table,row_count,3),f_c_i(table,row_count,4),f_c_i(table,row_count,5),f_c_i(table,row_count,6),f_c_i(table,row_count,7),f_c_i(table,row_count,8)));
            row_count += 1;
            s_save(key, newarray);
            window.location.reload();
        }
    } else {
        console.log("Incorrect type")
    }
}