const moreButton = document.querySelector('.button-wrapper button');
const body = document.querySelector('body');
const quoteWrapper = document.querySelector('.quotes-wrapper');
const timeWrapper = document.querySelector('.time-wrapper');
const refreshButton = quoteWrapper.querySelector('img')
const greeting = document.querySelector('.greeting');
const statValue = document.querySelectorAll('.stat-value')
const loading = document.querySelector('.loading')

const fetchQuote = async () => {
    const fetchedData = await fetch('https://api.quotable.io/random')
    const data = await fetchedData.json();
    const quote = quoteWrapper.querySelector('q')
    const author = quoteWrapper.querySelector('b')
    quote.innerHTML = data.content
    author.innerHTML = data.author
}

const fetchTime = async () => {
    const time = timeWrapper.querySelector('.middle .left h1')
    const date = new Date();
    time.innerHTML = String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0');
    const sec = date.getSeconds()
    const timeIcon = timeWrapper.querySelector('.top img')
    if (date.getHours() < 12) {
        greeting.innerHTML = "Morning"
        timeIcon.setAttribute('src', './assets/icon-sun.svg')
    }
    else if (date.getHours() < 18) {
        greeting.innerHTML = "Afternoon"
        timeIcon.setAttribute('src', './assets/icon-sun.svg')
    }
    else {
        greeting.innerHTML = "Evening"
        timeIcon.setAttribute('src', './assets/icon-moon.svg')
    }
    setTimeout(fetchTime, 60000 - sec * 1000);
}

const fetchBgImg = async (greet) => {
    const fetchedData = await fetch(`https://pixabay.com/api/?key=28599399-622a30aa5d939892e55559f69&q=${greet}&image_type=photo&per_page=12&category=nature`)
    const data = await fetchedData.json();
    const number = Math.floor(Math.random() * 12)
    console.log(data)
    const result = await data.hits[+number].largeImageURL
    body.style.background = `url(${result}) no-repeat`
    body.style.backgroundSize = 'cover'
    setTimeout(()=>{
        loading.classList.add('hidden')
    },3000)
}


const fetchTimeDetails = async () => {
    const fetchedData = await fetch('https://worldtimeapi.org/api/ip')
    const data = await fetchedData.json();
    timeWrapper.querySelector(".middle .right").innerHTML = data.abbreviation
    timeWrapper.querySelector('.bottom').innerHTML = data.timezone
    statValue[0].innerHTML = data.timezone
    statValue[1].innerHTML = data.day_of_week
    statValue[2].innerHTML = data.day_of_year
    statValue[3].innerHTML = data.week_number
    fetchBgImg(greeting.innerHTML)
}

const toggleMore = () => {
    body.classList.toggle('swiped');
}

fetchQuote()
fetchTime()
fetchTimeDetails()

moreButton.addEventListener('click', toggleMore);
refreshButton.addEventListener('click', fetchQuote)