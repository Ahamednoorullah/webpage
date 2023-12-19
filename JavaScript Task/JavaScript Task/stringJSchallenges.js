const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    
   if (!validateInputs()) {
    e.preventDefault();
   } 

})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    
    let success = true;

    if (usernameVal==='') {
        setError(username,'Username is required')
        success = false;
    }else if((usernameVal.length < 3) || (usernameVal.length > 25)){
        setError(username,'Username must be between 3 and 25 Characters')
    }else if(!validateUsername(usernameVal)){
        setError(username,'Username allows only alphanumeric characters and the underscore')
    }else if(!validateUsername1(usernameVal)){
        setError(username,'Username mut be alphabhet')
    }else {
        setSuccess(username)
    }

    if (emailVal==='') {
        setError(email,'Email is required')
        success = false;
    } else if (!validateEmail(emailVal)) {
        setError(email,'Please Enter Valid Email')
        success = false;
    }else{
        setSuccess(email)
    }

    if (passwordVal === '') {
        setError(password,'Password is required')
        success = false;
    } else if(passwordVal.length < 8){
        success = false;
        setError(password,'Password must be atleast 8 Character long')
    }else{
        setSuccess(password)
    }

    if (cpasswordVal === '') {
        setError(cpassword,'Confirm Password is required');
        success = false;
    } else if(cpasswordVal!==passwordVal){
        setError(cpassword,'Password does not match')
        success = false;
    }else{
        setSuccess(cpassword)
    }
    return success;

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error');
}

const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
}

const validateUsername = (username) => {
    return String(username)
    .match(
        /^[A-Za-z0-9_]+$/
    );
}

const validateUsername1 = (username) => {
    return String(username)
    .match(
        /^[A-Za-z][A-Za-z0-9]*(?:_+[A-Za-z0-9]+)*$/
    );
}

