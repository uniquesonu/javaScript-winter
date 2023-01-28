const imgWrapper = document.querySelector('.img-wrapper');

const fetchImg = async()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/photos')
    return data.json();
}

const createImg = (img)=>{
    const card = document.createElement('div');
    card.className = 'single-img';
    card.innerHTML = `
    <img src="${img.url}" alt="image">
            <span>
                <p class="count">${img.id}</p>
                <p class="title">${img.title}</p>
            </span>
    `
    imgWrapper.append(card)
}


const addImage = async(cb)=>{
    const result = await cb();
    result.forEach(img => {
        createImg(img)
    });
}

addImage(fetchImg);