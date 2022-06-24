const accountNumber = document.querySelector<HTMLInputElement>("#account");
const income = document.querySelector<HTMLInputElement>("#income");
const spend = document.querySelector<HTMLInputElement>("#spend");
console.log(accountNumber, income, spend);
type Summary1 =
    {
        AccountNumber: number
        Income: string
        Spend: string
    }

const loginEmail = localStorage.getItem("loginEmail")
const Summary1 = localStorage.getItem(loginEmail!)
if (Summary1 == null)
{
    console.log("email is not valid");
}
else
    console.log(JSON.parse(Summary1));
const temp: any = JSON.parse(Summary1!);
console.log(temp.AccountNumber);
accountNumber!.innerHTML = temp.AccountNumber;

income!.innerHTML = temp.Income;

spend!.innerHTML = temp.Spend;

// accountNumber!.textContent = temp!.AccountNumber;
// income?.textContent = Summary1!.Income;



