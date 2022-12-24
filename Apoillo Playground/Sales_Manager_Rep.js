// JavaScript File
// reading everything from local storage
var RepList = s_read("RepList");
var DealsList = s_read("DealsList");
// adding a placeholder when the array is empty to prevent code from breaking
if(RepList == null){
    var RepList = [];
    const placeholder = {a:"You found me!"};
    RepList.push(placeholder);
    s_save("RepList", RepList);
}

// storing the commision formula and also displaying it on screen so the manager knows what they set
// they can modify if they made a mistake
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

// this adds new reps by taking inputs from the form on the HTML
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

//leave all the reps besides the rep entered, hence deleting the rep from the list
function del_rep(){
    var array = RepList;
    var repid = document.forms["del_rep"]["rID"].value;
// filtering out the repID entered and delete it from the master list
    array = array.filter( obj => obj.ID !== repid);
    s_save("RepList",array);
    location.reload();
}

