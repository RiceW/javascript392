// JavaScript File

var RepList = s_read("RepList");
var DealsList = s_read("DealsList");

// adding a placeholder when the array is empty to prevent code from breaking
if(RepList == null){
    var RepList = [];
    const placeholder = {a:"You found me!"};
    RepList.push(placeholder);
    s_save("RepList", RepList)
}

// Build a table specific to the Rep logged in
function view_ind_rep(){
    var repID = document.forms["single_rep"]["rID"].value;
    var temp = []
    const placeholder = {a:"You found me!"};
    temp = DealsList.filter(deal => deal.repID == repID);
// pushing placeholder to the top so error will be caught in build table
    temp.unshift(placeholder);
    build_table('ind_rep_table', temp, 'Deal');
    event.preventDefault();
}

