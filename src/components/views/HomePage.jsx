import React, {useEffect, useState} from 'react';
import { listen } from '../../services/micListener';
import { getNewWordList, getMostUsedWord } from '../../services/transcriptService';
import YoutubePlayer from "../YoutubePlayer";
import WordList from "../WordList";

const HomePage = () => {
    const [ wordList, setWordList ] = useState(undefined)
    useEffect(() => {
        listen(updateWordList);
    }, []);
    const updateWordList = (newWords) => {
        console.log(newWords);
        setWordList((wordList) => getNewWordList(wordList, newWords));
    }
    console.log(wordList);

    return (
        <div id="homePage" className="container">
            <div className="row" style={{ background: 'white' }}>
                <div className="col">
                    <h1>DJ SUPO</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <img src="/djlogo.png" alt="logo" />
                    { wordList &&
                        <YoutubePlayer query={getMostUsedWord(wordList, setWordList)} />
                    }
                </div>
                <div className="col">
                    { wordList &&
                        <WordList wordList={wordList} />
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage;
