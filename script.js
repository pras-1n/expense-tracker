const savedTransactions = localStorage.getItem("myTransactions");

let transactions = savedTransactions ? JSON.parse(savedTransactions) : [];

const transactionForm = document.getElementById("transaction-form");
transactionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("transaction-name").value;
  const amount = parseFloat(
    document.getElementById("transaction-amount").value,
  );
  const date = document.getElementById("transaction-date").value;
  const type = document.getElementById("transaction-type").value;
  const category = document.getElementById("transaction-category").value;

  const transaction = {
    id: Date.now(),
    name: name,
    amount: amount,
    date: date,
    type: type,
    category: category,
  };
  transactions.push(transaction);
  transactionForm.reset();
  updateUI();
  localStorage.setItem("myTransactions", JSON.stringify(transactions));
});

const updateUI = () => {
  document.getElementById("transaction-list").innerHTML = "";
  transactions.forEach((transaction) => {
    const transactionItem = document.createElement("li");
    transactionItem.textContent = `${transaction.type} | ${transaction.name} - NRS ${transaction.amount} - ${transaction.date}`;
    document.getElementById("transaction-list").appendChild(transactionItem);
  });
  const incomes = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);
  document.getElementById("income").textContent = `NRS ${incomes.toFixed(2)}`;
  document.getElementById("expense").textContent = `NRS ${expenses.toFixed(2)}`;

  const balance = incomes - expenses;
  document.getElementById("balance").textContent = `NRS ${balance.toFixed(2)}`;
};

updateUI();