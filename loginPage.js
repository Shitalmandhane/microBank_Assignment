var emailId = document.querySelector("#emailField");
var errorEmail = document.querySelector('.invalid-email-message');
var password = document.querySelector("#pswField");
var weakPassword = document.querySelector('.weakPassword');
var togglePassword = document.querySelector('#togglePassword');
emailId === null || emailId === void 0 ? void 0 : emailId.addEventListener('click', function () {
    errorEmail.textContent = "";
});
password === null || password === void 0 ? void 0 : password.addEventListener('click', function () {
    weakPassword.textContent = "";
});
var submitBtn = document.getElementById('loginButton');
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', function onClick() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId.value)) {
        weakPassword.textContent = "";
        if ((password === null || password === void 0 ? void 0 : password.value.trim()) == "" || (password === null || password === void 0 ? void 0 : password.value) == null) {
            weakPassword.textContent = 'invalid Password';
            return;
        }
        console.log('Email is valid');
        localStorage.setItem("loginEmail", emailId.value);
        // localStorage.setItem(emailid, JSON.stringify(newSummary))
        return window.location.href = 'dashBoard.html', true;
    }
    else {
        if ((password === null || password === void 0 ? void 0 : password.value.trim()) == "" || (password === null || password === void 0 ? void 0 : password.value) == null) {
            weakPassword.textContent = 'invalid Password';
        }
        errorEmail.textContent = 'email is invalid';
        return;
    }
});
// const password = document.querySelector('#id_password');
togglePassword === null || togglePassword === void 0 ? void 0 : togglePassword.addEventListener('click', function (e) {
    console.log('-------------------');
    console.log(password);
    // test   test
    // toggle the type attribute
    var type = (password === null || password === void 0 ? void 0 : password.getAttribute('type')) === 'password' ? 'text' : 'password';
    password === null || password === void 0 ? void 0 : password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');
});
