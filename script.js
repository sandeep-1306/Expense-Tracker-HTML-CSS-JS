let totalAmount = 0;

function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = document.getElementById('expense-amount').value;

    if (name === "" || amount === "") {
        alert("Please enter expense details");
        return;
    }

    const expenseList = document.getElementById('expense-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `${name}: ₹${amount} <button class="delete-btn" onclick="removeExpense(this, ${amount})">X</button>`;

    expenseList.appendChild(listItem);

    totalAmount += parseInt(amount);
    document.getElementById('total-amount').innerText = totalAmount;

    document.getElementById('expense-name').value = "";
    document.getElementById('expense-amount').value = "";
}

function removeExpense(element, amount) {
    element.parentElement.remove();
    totalAmount -= amount;
    document.getElementById('total-amount').innerText = totalAmount;
}
