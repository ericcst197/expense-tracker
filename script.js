const form = document.querySelector("#expenseForm")
// const description = document.querySelector("#description");
// const date = document.querySelector("#date");
// const amount = document.querySelector("#amount");
const table = document.querySelector("#expenseTable");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { description, date, amount } = form.elements;
    if(!(description.value || date.value || amount.value)){
        alert("Please fill in the form!")
    } else {
        addList(description.value, date.value, amount.value)
    }
})

function addList(a, b, c) { 
    let tr = document.createElement("tr");
    let tdDescribe = document.createElement("td");
    let tdDate = document.createElement("td");
    let tdAmount = document.createElement("td");
    table.append(tr);
    tr.append(tdDescribe);
    tr.append(tdDate);
    tr.append(tdAmount);
    tdDescribe.append(a);
    tdDate.append(b);
    tdAmount.append(c);
}


 