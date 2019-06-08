// we need to control the button and the h3 tag

const btn = document.querySelector('.Talk');
const text = document.querySelector('.Text');

/*******************testing our button is clickable. **************************
btn.addEventListener('click', () =>{
    console.log("hello");
    text.textContent = "I'm working";
/ /    document.getElementsByClassName('Text').innerHTML = "I'm working";
} );
//***********************************************************************
*/
// create two speechRecognition object 

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-UK , ar-SA';
recognition.onstart = () => {
    console.log("It's working perfectly");
};
// add eventListener to button
btn.addEventListener('click', () =>{
    recognition.start();
    //console.log("hello");
    //text.textContent = "I'm working";
//    document.getElementsByClassName('Text').innerHTML = "I'm working";
} );

recognition.onresult = function(event){
    const currentText = event.resultIndex;
    const transcript = event.results[currentText][0].transcript;
    text.textContent = transcript;
    //document.getElementsByClassName('Text').style.backgroundColor('RED');
    readItLoud(transcript);
    //console.log(event);
};

function readItLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-Uk' || 'ar-SA';
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}