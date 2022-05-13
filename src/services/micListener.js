const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
// const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEven;
const supoMan = new SpeechRecognition();
supoMan.continuous = true;
supoMan.lang = 'fi-FI';

const listen = async ( updateWordList ) => {
    supoMan.start();
    supoMan.onresult = function(event) {
        console.log(event.results);
        const length = event.results.length;
        const result = event.results[length - 1][0].transcript;
        updateWordList(result);
    }
}

module.exports = {
    listen
};
