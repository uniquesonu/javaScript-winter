const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition();
recognition.continuous = true; //continuously listening
recognition.lang = 'en-US'
const radioBtn = document.querySelector('#en-US');

const micBtn = document.querySelector('#mic');
const updateText = document.querySelector('h3');
const textSpeech = document.querySelector('textarea');
const clearBtn = document.querySelector('#clear')
const copyBtn = document.querySelector('#copy');
const acc = document.querySelector('#con');
const speakTxt = document.querySelector('#speak')

// text to speech
'speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(")
const synth = window.speechSynthesis


let isListening = false;
let index=0;
const toggleListening=(e)=>{
    radioBtn.checked?recognition.lang = 'en-US': recognition.lang = 'hi-IN'
    index = 0
    if(!isListening){
        isListening=true;
        recognition.start();
        updateText.innerText='Listening... click the mic button to stop.'
        micBtn.innerHTML=`<img src="https://img.icons8.com/material-rounded/48/ffffff/microphone.png"/>
        Stop Listening`
    }else{
        recognition.stop();
        index = 0
        isListening=false;
        updateText.innerText='Not Listening... click the mic button to start.'
        micBtn.innerHTML=`<img src="https://img.icons8.com/material-rounded/48/ffffff/microphone.png"/>
        Start Listening`
    }
}

recognition.onresult = (e) =>{
    textSpeech.value+=(e.results[index][0].transcript +" ")
    let confidence =(e.results[index++][0].confidence)
    acc.innerText=(+confidence.toFixed(2)*100) +"%";
}

const clearInput =(e)=>{
   textSpeech.value="";
}

const copyText=(e)=>{
    textSpeech.select();
    navigator.clipboard.writeText(textSpeech.value);
    alert("copied successfully: " + textSpeech.value);
}
const voiceText=()=>{
    let ourText = textSpeech.value;
    const utterThis = new SpeechSynthesisUtterance(ourText)
    synth.speak(utterThis)
}

micBtn.addEventListener('click',toggleListening);
clearBtn.addEventListener('click',clearInput);
copyBtn.addEventListener('click',copyText);
speakTxt.addEventListener('click',voiceText)