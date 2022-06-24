var accountNumber = document.querySelector("#account");
var income = document.querySelector("#income");
var spend = document.querySelector("#spend");
console.log(accountNumber, income, spend);
var loginEmail = localStorage.getItem("loginEmail");
var Summary1 = localStorage.getItem(loginEmail);
if (Summary1 == null) {
    console.log("email is not valid");
}
else
    console.log(JSON.parse(Summary1));
var temp = JSON.parse(Summary1);
console.log(temp.AccountNumber);
accountNumber.innerHTML = temp.AccountNumber;
income.innerHTML = temp.Income;
spend.innerHTML = temp.Spend;
// accountNumber!.textContent = temp!.AccountNumber;
// income?.textContent = Summary1!.Income;
