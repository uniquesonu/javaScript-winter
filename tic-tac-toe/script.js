const cellBtn = document.querySelector('.game-board');
const gameCell = document.querySelectorAll('.cell')
const resetBtn = document.querySelector('.reset');
// modal
const modal = document.querySelector('.modal-container')
const closeBtn = document.querySelector('.close')
const textUpdate = document.querySelector('h3');

let xTurn = true;
let winnerFound = false;
let cnt = 0;

const cell = (e) =>{
    if(e.target.classList[0] == 'cell'){
        
        if(e.target.innerText !=""){
            return;
        }
        if(xTurn==true){
            e.target.innerText = 'X';
            xTurn=false;
        }else{
            e.target.innerText=' O';
            xTurn=true;
        }
        cnt++;

    }
    if(checkWin()){
        let winner = (e.target.innerHTML + " won the match")
        modal.classList.add("open")
        overlay.classList.add("open")
        textUpdate.innerHTML = winner
        cellBtn.removeEventListener('click',cell);
        return;
    }
    if(cnt==9){
        textUpdate.innerHTML = "Match Draw!"
        cellBtn.removeEventListener('click',cell);
    }
}

const checkSingle = (x,y,z)=>{
    let a = gameCell[x].innerHTML;
    let b = gameCell[y].innerHTML;
    let c = gameCell[z].innerHTML;
    if(a!=="" && a==b && b==c){
        winnerFound = true;
        // gameCell.forEach(cell=>{
        //     cell.classList.add('win')
        // })
    }
}

const checkWin=()=>{
    checkSingle(0,1,2)
    checkSingle(3,4,5)
    checkSingle(6,7,8)
    checkSingle(0,3,6)
    checkSingle(1,4,7)
    checkSingle(2,5,8)
    checkSingle(0,4,8)
    checkSingle(2,4,6)
    return winnerFound;
}

const blankUI = () =>{
    xTurn = true;
    winnerFound = false;
    cnt = 0;
    gameCell.forEach(cell=>{
        cell.innerHTML=""
    })
    cellBtn.addEventListener('click',cell)
    modal.classList.remove("open")
}



cellBtn.addEventListener('click',cell)
resetBtn.addEventListener('click',blankUI);
closeBtn.addEventListener('click',()=>{
    modal.classList.remove("open")
    overlay.classList.remove("open")
})