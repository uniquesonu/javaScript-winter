const container = document.querySelector('.container');

const fetchCharacter = async() =>{
    const data = await fetch('https://hp-api.onrender.com/api/spells');
    // console.log(data.json());
    return data.json();
}
// fetchCharacter();
let i = 0;


const createCharacter = (char) =>{
    const spells = document.createElement('div');
    spells.className = 'spell';
    spells.innerHTML =
    `
    <h2>${char.name}</h2>
    <h4>${char.description}</h4>
    `
    container.append(spells);
}

const addChar = async(cb) =>{
    const result = await cb();
    result.forEach(char => {
        createCharacter(char);
    });
}
// createCharacter();
addChar(fetchCharacter);