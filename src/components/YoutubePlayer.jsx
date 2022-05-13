import { useEffect } from "react";

export default function({ query }) {
  const [youtubeId, setYoutubeId] = useState()
  useEffect(() => {
    (async () => {
      const r = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&regionCode=FI&videoCategoryId=10&type=video&key=AIzaSyAgmiOO7ukjhRabW0tmo6i21S3vwB8CKrQ`)
      const j = await r.json()
      const item = j.items[0]
      if (item) {
        setYoutubeId(item.id.videoId)
      }
    })()
  }, [query])

  return youtubeId && (
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}