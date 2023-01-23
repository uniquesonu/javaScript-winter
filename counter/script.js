const counter = document.querySelector('p');
const resetBtn = document.querySelector('#reset')
const decBtn = document.querySelector('#decrease')
const incBtn = document.querySelector('#increase')

let currNum=0;

incBtn.addEventListener('click',()=>{
    counter.innerText = currNum+=1;
    
})
decBtn.addEventListener('click',()=>{
    counter.innerText = currNum-=1;
})
resetBtn.addEventListener('click',()=>{
    counter.innerText = 0;
    currNum=0;
})