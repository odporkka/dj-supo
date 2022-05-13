import React, {useEffect, useState} from 'react';
import { listen } from '../../services/micListener';
import {calculateNewValue} from "@testing-library/user-event/dist/utils";

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
            <p>DJ SUPO</p>
        </div>
    )
}

export default HomePage;
