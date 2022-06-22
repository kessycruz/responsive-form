const myForm = document.getElementById('myForm');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

myForm.addEventListener('submit',(e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fnameValue === ''){
        setErrorfor(fname, 'First Name cannot be empty');
    }else{
        setSuccessfor(fname);
    }
}

function setErrorfor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessfor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}