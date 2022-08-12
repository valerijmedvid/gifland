import { useState, useEffect } from "react"
import TenorClient from "../tenorClient"

function GifList() {
  const [gifList, setGifList] = useState([])

  useEffect(() => {
    TenorClient.featured(20).then((serchedGifs) => {
      setGifList(serchedGifs.results)
    })
  }, [])

  return (
    <div className="gifsContainer">
      {gifList.map((gif, key) => (
        <img key={key} src={gif.media_formats.gif.url} alt="" />
      ))}
    </div>
  )
}

export default GifList
