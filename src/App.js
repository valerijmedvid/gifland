import { useState } from "react"
import "./assets/css/App.css"
import { TenorClient } from "./tenorClient"

function App() {
  const client = new TenorClient()
  const [gifs, setGifs] = useState([])
  const [gifs2, setGifs2] = useState([])

  const loadgifs = async () => {
    const limit = 20
    const trends = await client.getTrending(limit)
    const selectedTrend = trends.results[Math.floor(Math.random() * limit)]
    const selectedTrend2 = trends.results[Math.floor(Math.random() * limit)]

    const serchedGifs = await client.search(selectedTrend)
    const serchedGifs2 = await client.search(selectedTrend2)
    setGifs(serchedGifs.results)
    setGifs2(serchedGifs2.results)
  }

  return (
    <div className="App">
      <h1>Gifland</h1>
      <div>
        <button onClick={loadgifs}>Load new GIFs</button>
      </div>{" "}
      <div className="gifsContainer">
        {gifs.map((gif, key) => (
          <img key={key} src={gif.media_formats.gif.url} alt="" />
        ))}
      </div>{" "}
      <div className="gifsContainer">
        {gifs2.map((gif, key) => (
          <img key={key} src={gif.media_formats.gif.url} alt="" />
        ))}
      </div>
    </div>
  )
}

export default App
