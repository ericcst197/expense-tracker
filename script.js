const form = document.querySelector("#expenseForm")
// const description = document.querySelector("#description");
// const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const table = document.querySelector("#expenseTable");

//Form input validation
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { description, date, amount } = form.elements;
    if(!(description.value || date.value || amount.value)){
        alert("Please fill in the form!")
    } else {
        addList(description.value, date.value, amount.value)
    }
})

//Add new list in the expense table
function addList(a, b, c) { 
    let tr = document.createElement("tr");
    let tdDescribe = document.createElement("td");
    let tdDate = document.createElement("td");
    let tdAmount = document.createElement("td");
    const formatNum = parseFloat(c).toFixed(2);
    table.append(tr);
    tr.append(tdDescribe, tdDate, tdAmount);
    tdDescribe.append(a);
    tdDate.append(b);
    tdAmount.append(`$ ${formatNum}`);
}

// Only allows Numbers and one decimal pont in textbox input
function isNumberKey(evt){
    let charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode == 46 && this.value.indexOf('.') != -1){
        return false;
    } else if (charCode > 31 && charCode != 46 && (charCode < 48 || charCode > 57 )){
        return false;
    } return true;
}


amount.onkeypress = isNumberKey;

