const form = document.querySelector('form')
const allInput = document.querySelectorAll('.form-control input');
const tBody = document.querySelector('tbody');
const resetBtn = document.querySelector('#reset');

const adddToBody=(imgURL,student)=>{
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.innerHTML=`<img src="${imgURL}" alt=${student[1]}/>`;
    tr.append(td);
    student.forEach(value => {
        const td = document.createElement('td');
        td.innerHTML=value;
        tr.append(td);
    });
    tBody.append(tr);
    saveToStorage(tBody.innerHTML);
}

const handleInput = async(e) =>{
    e.preventDefault();
    let imgURL = './dummy.png'
    if(allInput[0].value!==""){
        const formData = new FormData();
        formData.append('file',allInput[0].files[0]);
        formData.append('upload_preset', 'student_profile');
        const response = await fetch('https://api.cloudinary.com/v1_1/dr7u7qk4g/image/upload', {
            method: 'POST',
            body: formData
        })
        const data = await response.json();
        imgURL = data.url;
    }

    let result = Array.from(allInput).map(input=>{
        if(input.getAttribute('name')!=='gender'){
            return input.value;
        }else if(input.checked){
            return input.value;
        }
    })
    result = result.filter(value=>{
        return value!==undefined;
    })
    result = result.slice(1)
    adddToBody(imgURL,result,saveToStorage);
    resetBtn.click();
}
const saveToStorage=(data)=>{
    localStorage.setItem('student-data',data);
}
const populatePrevRes=()=>{
    const data = localStorage.getItem('student-data');
    tBody.innerHTML=data;
}
populatePrevRes();

form.addEventListener('submit',handleInput);