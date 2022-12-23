// JavaScript File

var RepList = s_read("RepList");
var DealsList = s_read("DealsList");

if(RepList == null){
    var RepList = [];
    const placeholder = {a:"You found me!"};
    RepList.push(placeholder);
    s_save("RepList", RepList)
}


function view_ind_rep(){
    var repID = document.forms["single_rep"]["rID"].value;
    var temp = []
    const placeholder = {a:"You found me!"};
// parsing through array to retrieve sum of a property, modified to work with our array and object types
    temp = DealsList.filter(deal => deal.repID == repID);
// pushing placeholder to the top so error will be caught in build table
    temp.unshift(placeholder);
    build_table('ind_rep_table', temp, 'Deal');
    event.preventDefault();
}

