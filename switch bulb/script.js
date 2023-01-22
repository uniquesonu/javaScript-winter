const switchBtn = document.querySelector('.switch');

const toggleBtn=(e)=>{
    document.body.classList.toggle('on')
}

switchBtn.addEventListener('click',toggleBtn);