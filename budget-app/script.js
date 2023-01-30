const addCat = document.querySelector(".add-cat-btn");
const catValue = document.querySelector("#add-cat");
const tBud = document.querySelector("#total-budget");
const budBtn = document.querySelector(".bud-add");
const budTxt = document.querySelector("#bud-text");
const select = document.querySelector("#option");
const expense = document.querySelector("#expenses-category");
const expBtn = document.querySelector(".add-exp");
const expenseTxt = document.querySelector('#spent-text');
const savingTxt = document.querySelector('#saving-text')

let t_Budget = 0;
let index = 0;
let spend = 0;
let allExpense = 0;
let categoryArray = [];
const handleTBudget = () => {
  let budget = (t_Budget += +tBud.value);
  budTxt.innerHTML = budget;
  tBud.value = "";
};

const addToTable = (catName, exp) => {
  const table = document.querySelector("table");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${catName}</td>
    <td>${exp}</td>
    `;
  table.append(tr);
};

const handleOption = () => {
  const category = document.createElement("option");
  category.innerHTML = catValue.value;
  category.value = index++;
  categoryArray.push(catValue.value);
  select.append(category);
  // alert('added successfully')
  addToTable(catValue.value, 0);
  catValue.value = "";
};


const updateExpense = () => {
  const selectedIndex = select.selectedIndex;
  const selectedCat = categoryArray[selectedIndex];
  const selectedExp = (spend +(+expense.value));
  allExpense= allExpense+(+expense.value);
  const tableRows = document.querySelectorAll("tr");
  for (let i = 0; i < tableRows.length; i++) {
    const cells = tableRows[i].cells;
    if (cells[0].innerHTML === selectedCat) {
      cells[1].innerHTML = selectedExp;
      break;
    }
  }
  expenseTxt.innerHTML=allExpense;
  let saving = t_Budget-allExpense;
  savingTxt.innerHTML=saving;

  expense.value = "";
};
const updateChange = () =>{
    spend=0;
}

addCat.addEventListener("click", handleOption);
budBtn.addEventListener("click", handleTBudget);
expBtn.addEventListener("click", updateExpense);
select.addEventListener('change',updateChange);
