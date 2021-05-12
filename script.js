function addBudget() {
  input = document.getElementById("enter").value;
  document.getElementById("bud").innerHTML = input;
  document.getElementById("bal").innerHTML = input;
}

function addExpenses() {
  var tot;
  var totale;
  var exp1 = document.getElementById("addExp").value;
  var exp2 = document.getElementById("addBal").value;

  tot = exp2 - exp1;

  addExpenses = document.getElementById("addBal").value;
  document.getElementById("exp").innerHTML = addExpenses;

  totale = input - tot;

  document.getElementById("bal").innerHTML = totale;
}

function addExp() {
  var exp = document.getElementById("addExp").value;
  document.getElementById("expense2").innerHTML = exp;
}
