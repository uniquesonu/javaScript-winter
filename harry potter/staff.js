const container = document.querySelector('.container');

const fetchCharacter = async() =>{
    const data = await fetch('https://hp-api.onrender.com/api/characters/staff');
    // console.log(data.json());
    return data.json();
}
// fetchCharacter();
let i = 0;


const createCharacter = (char) =>{
    const character = document.createElement('div');
    character.className = 'character';
    let img = './unnamed.png';
    if(char.image != ''){
        img = char.image;
    }
    character.innerHTML =
    `
    <div class="left">
                <img src="${img}" alt="${char.name}">
            </div>
            <div class="right">
                <h3>Character Name : <span>${char.name}</span></h3>
                <p>Actor Name: <span>${char.actor}</span></p>
                <p>Gender: <span>${char.gender}</span></p>
                <p>House: <span>${char.house}</span></p>
                <p>DOB: <span>${char.dateOfBirth}</span></p>
                <p>wizard: <span>${char.wizard}</span></p>
                <p>eye color: <span>${char.eyeColour}</span></p>
                <p>hair color: ${char.hairColour}</p>
            </div>
    `
    container.append(character);
}

const addChar = async(cb) =>{
    const result = await cb();
    result.forEach(char => {
        createCharacter(char);
    });
}
// createCharacter();
addChar(fetchCharacter);