
const getNewWordList = (wordList, newWords) => {
    let newWordList = { ...wordList };
    const wordArray = newWords.split(' ');
    wordArray.forEach((word) => {
        let parsed = word.toLowerCase();
        if (newWordList.hasOwnProperty(parsed)) {
            newWordList[parsed]++;
        } else {
            newWordList[parsed] = 1;
        }
    })
    return newWordList;
};

module.exports = {
    getNewWordList
};
