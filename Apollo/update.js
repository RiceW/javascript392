var username 
var RepList
var DealsList

// reading from localstroage
username = r_item("username")
RepList = r_item("RepList")
DealsList = r_item("DealsList")

let ind_total_sales = 0

// total sales calculation for individual rep
function ind_ts(uname){
    const deals = DealsList.forEach(deals => {
        if(deals.repID == uname){
            ind_total_sales += deals.dsizem;
        }});
    return ind_total_sales;
}

// commission calculation
function c_calculation(base, commission, sales){
    var c = 0
    c = base + sales*commission;
    return c;
}

// type can be deals, or sales rep, enter respective array
function update_info(type, id, field){
    type.forEach()
}

console.log(c_calculation(500,0.02,ind_ts("SR00001")))
