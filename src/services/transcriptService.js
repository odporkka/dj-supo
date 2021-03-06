const getNewWordList = (wordList, newWords) => {
    let newWordList = { ...wordList };
    const wordArray = newWords.split(' ');
    wordArray.forEach((word) => {
        if (word === '') {
            return
        }
        let parsed = word.toLowerCase();
        if (newWordList.hasOwnProperty(parsed)) {
            newWordList[parsed]++;
        } else {
            newWordList[parsed] = 1;
        }
    })
    return newWordList;
};

const getMostUsedWord = (wordList) => {
    const wordArray = Object.entries(wordList).sort((a, b) => (b[1]-a[1]));
    console.log(wordArray);
    return wordArray[0][0];
}

const wordListToString = (wordList) => {
    const wordArray = Object.entries(wordList).sort((a, b) => (b[1] - a[1]));
    let string = '';
    wordArray.forEach((word) => string += `${word[0]}:${word[0]}\n`)
    return string;
}

module.exports = {
    getNewWordList,
    getMostUsedWord,
    wordListToString,
};
