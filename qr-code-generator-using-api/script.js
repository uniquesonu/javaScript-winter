const generateBtn = document.querySelector("#generate");
const input = document.querySelector("input");
const qrImg = document.querySelector("#qr-img");
const qrTxt = document.querySelector("#qr-text");
const popUp = document.querySelector(".confirm-message");

const generate = () => {
  let data = input.value;
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`;
  qrImg.src = url;
  popUp.classList.add("show");
  qrTxt.innerHTML = data;
  data = "";
};

generateBtn.addEventListener("click", generate);
