import { useEffect, useState } from "react";
import { postNotification } from "../services/notificationService";

const randomSentences = [
  "I like $$ too",
  "I listen to $$ in my van all the time!",
  "OMG $$ is banger",
  "nice taste bro"
];

const getFBIGuySentence = (query) => {
  const item =
    randomSentences[Math.floor(Math.random() * randomSentences.length)];
  return item.replace("$$", query);
};

export default function ({ query }) {
  const [youtubeId, setYoutubeId] = useState();
  useEffect(() => {
    (async () => {
      const r = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&regionCode=FI&videoCategoryId=10&type=video&key=AIzaSyAgmiOO7ukjhRabW0tmo6i21S3vwB8CKrQ`
      );
      const j = await r.json();
      const item = j.items[0];
      if (item) {
        setYoutubeId(item.id.videoId);
      }
    })();
    console.log(getFBIGuySentence(query));
    setTimeout(() => {
      postNotification(getFBIGuySentence(query
        ));
    }, 1000);
  }, [query]);

  return (
    <>
      {youtubeId && (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: -1,
          }}
        ></iframe>
      )}
      <div
        style={{
          position: "absolute",
          left: 30,
          bottom: 60,
          backgroundColor: "white",
          padding: 4,
        }}
      >
        {query}
      </div>
    </>
  );
}
