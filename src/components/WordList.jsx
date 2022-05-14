import React from 'react';
import { wordListToString } from "../services/transcriptService";

const WordList = (props) => {
    const { wordList } = props;
    if (!wordList) return null;

    const wordArray = Object.entries(wordList).sort((a, b) => (b[1] - a[1]));

    return (
        <div id="wordList" style={{ background: 'white' }} className="container">
            <h2>Most used words:</h2>
            <p>
                {  wordArray.map((word) => (
                    <span>
                        {word[0]}:{word[1]}<br />
                    </span>
                ))}
            </p>

        </div>
    )
}

export default WordList;
