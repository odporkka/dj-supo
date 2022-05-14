import React, { useEffect, useState } from "react";
import { listen } from "../../services/micListener";
import {
  askNotificationPermission,
  postNotification,
} from "../../services/notificationService";
import {
  getNewWordList,
  getMostUsedWord,
} from "../../services/transcriptService";
import YoutubePlayer from "../YoutubePlayer";

const HomePage = (props) => {
  const [wordList, setWordList] = useState(undefined);
  useEffect(() => {
    askNotificationPermission();
    listen(updateWordList);
    setTimeout(() => {
      postNotification("Nice music taste mate");
    }, 1000);
  }, []);
  const updateWordList = (newWords) => {
    console.log(newWords);
    setWordList((wordList) => getNewWordList(wordList, newWords));
  };
  console.log(wordList);

  return (
    <div id="homePage">
      <p>DJ SUPO</p>
      <img src="/djlogo.png" alt="logo" />
      {wordList && (
        <YoutubePlayer query={getMostUsedWord(wordList, setWordList)} />
      )}
    </div>
  );
};

export default HomePage;
