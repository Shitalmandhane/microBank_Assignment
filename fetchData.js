var loginEmail = localStorage.getItem("loginEmail");
var Summary = localStorage.getItem(loginEmail);
if (Summary == null) {
    console.log("email is not valid");
}
else
    console.log(JSON.parse(Summary));
