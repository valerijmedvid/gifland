import { useState, useEffect } from "react"
import TenorClient from "../tenorClient"
import GifItem from "./GifItem"

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
        <GifItem gif={gif} key={key} />
      ))}
    </div>
  )
}

export default GifList
