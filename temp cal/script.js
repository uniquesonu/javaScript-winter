let number = document.querySelector('#degrees')
let type1 = document.querySelector('#type-1')
let type2 = document.querySelector('#type-2')
let result = document.querySelector('#display-result')
let submitBtn = document.querySelector('#convert')

const convertData=(e)=>{
  let inputValue = +(number.value);
  if(type1.value==1 && type2.value==4){
    result.innerHTML=inputValue;
  }
  else if(type1.value==1 && type2.value==5){
    result.innerHTML= (((inputValue)-32)*(5/9)).toFixed(4);
  }else if(type1.value==1 && type2.value==6){
    result.innerHTML= (((inputValue-32)*(5/9))+273.15).toFixed(4);
  }
  else if(type1.value==2 && type2.value==4){
    result.innerHTML= ((inputValue*(9/5))+32).toFixed(4);
  }
  else if(type1.value==2 && type2.value==5){
    result.innerHTML=inputValue;
  }
//   else if(type1.vaule==2 && type2.value==6){
//     result.innerHTML="dfjksf";
//   }
  else if(type1.value==3 && type2.value==4){
    result.innerHTML = (((inputValue-273.15)*(9/5))+32).toFixed(4);
  }else if(type1.value==3 && type2.value==5){
    result.innerHTML=((inputValue)-273.15).toFixed(4);
  }
  else if(type1.value==3 && type2.value==6){
    result.innerHTML=inputValue;
  }
  else{
    result.innerHTML=(inputValue+273.15).toFixed(4);
  }
}
submitBtn.addEventListener('click',convertData);

// javaScript done