//Inputs
let first_name = document.getElementById('first_name');
let last_name = document.getElementById('last_name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('button');

//Regex for email validation
const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//Variables for p elements under input
let first_name_error = document.getElementById('first_name_error');
let last_name_error = document.getElementById('last_name_error');
let email_error = document.getElementById('email_error');
let password_error = document.getElementById('password_error');

button.addEventListener('click', (event) => {
    if (!re.test(email.value)) {
        event.preventDefault(); //check input before submitting
        email.style.border = '2px solid red';
        email_error.style.display = 'block';
        email.style.background = 'url(./resources/images/icon-error.svg) no-repeat 90% 50%';
        email.style.backgroundSize = '7%';
    } else {
        email.style.border = '1px solid hsl(246, 25%, 77%)';
        email_error.style.display = 'none';
    }
    if (first_name.value === '') {
        event.preventDefault();
        first_name.style.border = '2px solid red';
        first_name_error.style.display = 'block';
        first_name.style.background = 'url(./resources/images/icon-error.svg) no-repeat 90% 50%';
        first_name.style.backgroundSize = '7%';
    } else {
        first_name.style.border = '1px solid hsl(246, 25%, 77%)';
        first_name_error.style.display = 'none';
    }
    if (last_name.value === ''){
        event.preventDefault();
        last_name.style.border = '2px solid red';
        last_name_error.style.display = 'block';
        last_name.style.background = 'url(./resources/images/icon-error.svg) no-repeat 90% 50%';
        last_name.style.backgroundSize = '7%';
    } else {
        last_name.style.border = '1px solid hsl(246, 25%, 77%)';
        last_name_error.style.display = 'none';
    }
     if (password.value === ''){
        event.preventDefault(); 
        password.style.border = '2px solid red';
        password_error.style.display = 'block';
        password.style.background = 'url(./resources/images/icon-error.svg) no-repeat 90% 50%';
        password.style.backgroundSize = '7%';
    } else {
        password.style.border = '1px solid hsl(246, 25%, 77%)';
        password_error.style.display = 'none';
    }
})