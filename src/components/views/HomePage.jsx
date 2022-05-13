import React, {useEffect, useState} from 'react';
import { listen } from '../../services/micListener';
import { getNewWordList } from '../../services/transcriptService';
import YoutubePlayer from "../YoutubePlayer";

const HomePage = (props) => {
    const [ wordList, setWordList ] = useState({})
    useEffect(() => {
        listen(updateWordList);
    }, []);
    const updateWordList = (newWords) => {
        console.log(newWords);
        setWordList((wordList) => getNewWordList(wordList, newWords));
    }
    console.log(wordList);

    return (
        <div id="homePage">
            <p>DJ SUPO</p>
            <YoutubePlayer />
        </div>
    )
}

export default HomePage;
