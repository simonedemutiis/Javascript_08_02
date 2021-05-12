function addBudget() {
  input = document.getElementById("enter").value;
  document.getElementById("bud").innerHTML = "$" + input;
  document.getElementById("bal").innerHTML = "$" + input;
}

function addExpenses() {
  var tot;
  var totale;
  var exp1 = document.getElementById("addExp").value;
  var exp2 = document.getElementById("addBal").value;

  tot = exp1 - exp2;

  addExpenses = document.getElementById("addBal").value;
  document.getElementById("exp").innerHTML = addExpenses;

  totale = input - tot;

  document.getElementById("bal").innerHTML = "$" + totale;
  addExp();
}

function addExp() {
  var budg = document.getElementById("addExp").value;
  document.getElementById("divA").textContent = "Expense Title";
  document.getElementById("expense1").innerHTML = -budg;
  var exp = document.getElementById("addBal").value;
  document.getElementById("divB").textContent = "Expense Value";
  document.getElementById("expense2").innerHTML = "$" + exp;
}
