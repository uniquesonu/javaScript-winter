const API_KEY = 'aM7eEqdcVBMHivNfUfLigDzJXFJicfdLeMSMibqPXJ5cJEt1MWoX2duH';
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector(".search-box");
const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit-btn');

let searchValue;


async function curatedPhoto(){
    const fetchData = await fetch("https://api.pexels.com/v1/curated/?page=1&per_page=150",
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: API_KEY
        }
    });
    const data = await fetchData.json();
    console.log(data);
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div');
        galleryImg.className = 'gallery-img'
        galleryImg.innerHTML =`<img src=${photo.src.large}</img> <p>${photo.photographer}</p>`;
        gallery.append(galleryImg);
    });
}

async function searchPhoto(query){
    clearUI();
    const fetchData = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: API_KEY
        }
    });
    const data = await fetchData.json();
    console.log(data);
    data.photos.forEach(photo => {
        console.log(photo)
        const galleryImg = document.createElement('div');
        galleryImg.className = 'gallery-img'
        galleryImg.innerHTML =`<img src=${photo.src.large}</img> <p>${photo.photographer}</p>`;
        gallery.append(galleryImg);``
    });
}



curatedPhoto();

const handleSearch=e=>{
    e.preventDefault();
    searchValue = searchInput.value;
    searchPhoto(searchValue);
    searchInput.value="";
}
const clearUI = ()=>{
    gallery.innerHTML='';
}

form.addEventListener('submit',handleSearch);