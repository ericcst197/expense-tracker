const form = document.querySelector("#expenseForm");
const list = document.querySelector("#expenseList");
const select = document.querySelector("#type");
const total = document.querySelector(".total-balance");
const income = document.querySelector(".income");
const expense = document.querySelector(".expense");
const { description, date, amount } = form.elements;

let zero = 0
total.textContent = zero.toFixed(2);
income.textContent = zero.toFixed(2);
expense.textContent = zero.toFixed(2);

//Selection
select.addEventListener("change", () => {
    if (!select.value == "") select.value;
})


//Form input validation
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!(description.value && date.value && amount.value)) {
        alert("Please fill in the form!")
    } else {
        if (select.value === "") {
            alert("Please select Income/Expense.");
        } else {
            select.value === "income" ? valueIncome() : valueExpense();
            addList(description.value, date.value, amount.value);
            description.value = "";
            date.value = "";
            amount.value = "";
        }
    };
})

//Income value
function valueIncome() {
    const calcTotal = parseFloat(total.innerText) + parseFloat(amount.value);
    const calcIncome = parseFloat(income.innerText) + parseFloat(amount.value);
    total.innerText = calcTotal.toFixed(2)
    income.innerText = calcIncome.toFixed(2)
}

//Expense value
function valueExpense() {
    const calcTotal = parseFloat(total.innerText) - parseFloat(amount.value);
    const calcExpense = parseFloat(expense.innerText) + parseFloat(amount.value);
    total.innerText = calcTotal.toFixed(2);
    expense.innerText = calcExpense.toFixed(2);
}


//Add new list in the expense table
function addList(a, b, c) {
    const tr = document.createElement("tr");
    const tdDescribe = document.createElement("td");
    const tdDate = document.createElement("td");
    const tdAmount = document.createElement("td");
    const delBtn = document.createElement("button");
    const formatNum = parseFloat(c).toFixed(2);
    list.append(tr);
    tr.append(tdDescribe, tdDate, tdAmount, delBtn);
    tdDescribe.append(a);
    tdDate.append(b);
    tdAmount.append(formatNum);
    select.value === "income" ? tdAmount.classList.add("income") : tdAmount.classList.add("expense")
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.classList.add("trash");
    delBtn.addEventListener("click", delList);
}

//Delete button function
function delList() {
    const delValueIncome = () => {
        const calcTotal = parseFloat(total.innerText) - parseFloat(num.innerHTML);
        const calcIncome = parseFloat(income.innerText) - parseFloat(num.innerHTML);
        total.innerText = calcTotal.toFixed(2)
        income.innerText = calcIncome.toFixed(2);
    };
    const delValueExpense = () => {
        const calcTotal = parseFloat(total.innerText) + parseFloat(num.innerHTML);
        const calcExpense = parseFloat(expense.innerText) - parseFloat(num.innerHTML);
        total.innerText = calcTotal.toFixed(2);
        expense.innerText = calcExpense.toFixed(2);
    }

    let li = this.parentNode;
    let num = this.parentNode.childNodes[2];
    num.classList.value === "income"? delValueIncome() : delValueExpense()
    li.remove()
}

// Only allows Numbers and one decimal pont in textbox input
function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode == 46 && this.value.indexOf('.') != -1) {
        return false;
    } else if (charCode > 31 && charCode != 46 && (charCode < 48 || charCode > 57)) {
        return false;
    } return true;
}


amount.onkeypress = isNumberKey;

