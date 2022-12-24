// JavaScript File

var RepList = s_read("RepList");
var DealsList = s_read("DealsList");
console.log(DealsList);
if(RepList == null){
    var RepList = [];
    const placeholder = {a:"You found me!"};
    RepList.push(placeholder);
    s_save("RepList", RepList);
}

function store_com(){
    var variable = document.forms["commission"]["variable"].value;
    var fixed = document.forms["commission"]["fixed"].value;
    document.getElementById('formula').innerHTML = "Your current formula is set to $" + fixed + " + " + variable + "% * total sales";
    var commission = []
    var variable = variable/100
    commission.push(fixed, variable);
    s_save("commission",commission);
    event.preventDefault();
}

function add_new_object(array,key,object){
    var rID = document.forms["myForm"]["rID"].value;
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var bd = document.forms["myForm"]["bd"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var region = document.forms["myForm"]["region"].value;
    var pw = document.forms["myForm"]["pw"].value;
    array.push(new object(rID, fname, lname, bd, phone, region, pw));
    s_save(key, array);
}

//leave the rest   the rep entered hence deleting the rep
function del_rep(){
    var array = RepList;
    var repid = document.forms["del_rep"]["rID"].value;
    array = array.filter( obj => obj.ID !== repid);
    s_save("RepList",array);
    location.reload();
}

