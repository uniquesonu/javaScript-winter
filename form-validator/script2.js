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
const checkEmail = (input) => {
    return String(input.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

//   username validator
const vaildateUsername = (username) => {
    return String(username).toLowerCase().match(/^[a-zA-Z\-]+$/);
}

// check required function
const checkRequired = (inputArr) =>{
    inputArr.forEach(input => {
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`)
        }else{
            showSuccess(input);
        }
    });
}

// check input length
function checkLength(input,min, max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} character`);
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} character`);
    }else{
        showSuccess(input)
    }
}

// check password match
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,"Password do not match")
    }
}

// get capitalize
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    checkRequired([username,email,password,confirmPassword]);
    checkLength(username,3,8);
    checkLength(password,6,12   );
    if(!checkEmail(email)){
        showError(email,"Email is not valid")
    }else{
        showSuccess(email)
    }

    checkPasswordMatch(password,confirmPassword);
})
