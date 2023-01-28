/*
Todo 1 :  Select the element of the following id 
    model
    open model btn
    close model btn
    Bonus : overlay
*/
const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const overlay = document.querySelector('#overlay');

// Todo 2 : Create a click event listner for the open model btn that adds the class "open " to  the model 
// Bonus : Also add the class "open" to the overlay 

openModalBtn.addEventListener('click', () => {
    modal.classList.add('open');
    overlay.classList.add("open")
})



// Todo 3 : Create a click event listner to the close modal btn that removes the class "open" from the modal 
// Bonus : Also remove class "open" to the overlay

const closeModal = () => {
    modal.classList.remove('open');
    overlay.classList.remove('open');
}

closeModalBtn.addEventListener('click', closeModal)

// BONUS : add a click event listner to the overlay that removes the "open" from the modal and the overlay

overlay.addEventListener('click', closeModal)