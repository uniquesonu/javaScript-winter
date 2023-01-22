const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

//error function
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// success function
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// email validator
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

//   username validator
const vaildateUsername = (username) => {
    return String(username).toLowerCase().match(/^[a-zA-Z\-]+$/);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(username.value===''){
        showError(username,"username is required");
    }
    else if(username.value > 4){
        showError(username,"username must be greater than 4 character")
    }
    else{
        showSuccess(username);
    }

    if(email.value===''){
        showError(email,"email is required");
    }else if(!validateEmail(email.value)){
        showError(email,"email is not valid")
    }
    else{
        showSuccess(email);
    }

    if(password.value===''){
        showError(password,"password is required");
    }else{
        showSuccess(password);
    }

    if(confirmPassword.value===''){
        showError(confirmPassword,"confirm password is required");
    }else{
        showSuccess(confirmPassword);
    }
})