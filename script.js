let transactions = [];

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
});
