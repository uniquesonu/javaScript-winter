const container =  document.querySelector('.container');
const generateBtn = document.querySelector('#generate');
const circleBtn = document.querySelector('.circleBtn');

for(let i=0; i<=80; i++){
    let blocks = document.createElement('div');
    blocks.classList.add('block')
    container.appendChild(blocks)
}
function generate(){
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-700,700);
        },
        translateY: function(){
            return anime.random(-500,500)
        },
        scale: function(){
            return anime.random(1,5)
        }
        
    })
}


function circle(){
    let circleBtn =  document.querySelector('.circleBtn');
    container.classList.toggle('circle');
}
generateBtn.addEventListener('click',()=>{
    generate();
})
circleBtn.addEventListener('click',()=>{
    circle();
    generate();
})

generate();