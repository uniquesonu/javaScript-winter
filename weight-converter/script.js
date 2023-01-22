const inp = document.querySelector('#weight-converter');
const gram = document.querySelector('#gram');
const kg = document.querySelector('#kilo-gram');
const ounces = document.querySelector('#ounces');
const result = document.querySelector('.result-wrapper');

inp.addEventListener('input',(e)=>{
    let pounds = e.target.value;
    gram.innerHTML = 453.592*pounds;
    kg.innerHTML = 0.453592*pounds;
    ounces.innerHTML = 16*pounds;
    if(pounds===''){
        result.classList.remove('result-final');
    }else{
        result.classList.add('result-final');
    }
})
