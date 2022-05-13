const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
// const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEven;
const iceCreamTruck1 = new SpeechRecognition();
iceCreamTruck1.continuous = true;
iceCreamTruck1.lang = 'fi-FI';

const listen = ( updateWordList ) => {
    iceCreamTruck1.start();
    iceCreamTruck1.onresult = function(event) {
        const length = event.results.length;
        const result = event.results[length - 1][0].transcript;
        updateWordList(result);
    }
}

module.exports = {
    listen
};
