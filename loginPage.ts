const emailId = document.querySelector<HTMLInputElement>("#emailField");
const errorEmail = document.querySelector<HTMLInputElement>('.invalid-email-message');
const password = document.querySelector<HTMLInputElement>("#pswField");
const weakPassword = document.querySelector<HTMLInputElement>('.weakPassword');
const togglePassword = document.querySelector('#togglePassword');
emailId?.addEventListener('click', () =>
{
    errorEmail!.textContent = "";
});
password?.addEventListener('click', () =>
{
    weakPassword!.textContent = "";
});
const submitBtn = document.getElementById('loginButton')
submitBtn?.addEventListener('click', function onClick ()
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId!.value))
    {
        weakPassword!.textContent = "";
        if (password?.value.trim() == "" || password?.value == null)
        {
            weakPassword!.textContent = 'invalid Password';
            return;
        }
        console.log('Email is valid');
        localStorage.setItem("loginEmail", emailId!.value);
        // localStorage.setItem(emailid, JSON.stringify(newSummary))
        return window.location.href = 'dashBoard.html', true;
    }
    else
    {
        if (password?.value.trim() == "" || password?.value == null)
        {
            weakPassword!.textContent = 'invalid Password';
        }
        errorEmail!.textContent = 'email is invalid';
        return;
    }
});
// const password = document.querySelector('#id_password');

togglePassword?.addEventListener('click', function (e)
{
    // toggle the type attribute
    const type = password?.getAttribute('type') === 'password' ? 'text' : 'password';

    password?.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');

});

