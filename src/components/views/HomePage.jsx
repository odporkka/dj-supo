import React, {useEffect, useState} from 'react';
import { listen } from '../../services/micListener';
import {calculateNewValue} from "@testing-library/user-event/dist/utils";
import YoutubePlayer from '../YoutubePlayer';

const HomePage = (props) => {
    const [ wordList, setWordList ] = useState([])
    useEffect(() => {
        listen(updateWordList)
    }, []);
    console.log(wordList);

    const updateWordList = (newWords) => {
        const wordArray = newWords.split(' ');
        console.log(wordArray);
        setWordList(newWords);
    }

    return (
        <div id="homePage">
            <img src="/djlogo.png" alt="logo" />
            {/* <YoutubePlayer query="joop" /> */}
        </div>
    )
}

export default HomePage;
