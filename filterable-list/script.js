let InputFilter = document.querySelector('#filter-text')
let li = document.querySelectorAll('li.collection-item')

function filterNames(){
    let filterValue = InputFilter.value.toLowerCase();
    li.forEach((e)=>{
        if(e.textContent.trim().toLowerCase().indexOf(filterValue)>-1){
           e.style.display='block'
        } else {
           e.style.display='none'
        }
    })
}

InputFilter.addEventListener('keyup', filterNames);
