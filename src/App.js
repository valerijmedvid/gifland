import { useState } from "react"
import "./assets/css/App.css"
import { TenorClient } from "./tenorClient"

function App() {
  const client = new TenorClient()
  const [gifs, setGifs] = useState([])

  const loadgifs = async () => {
    const serchedGifs = await client.featured(20)
    setGifs(serchedGifs.results)
  }

  return (
    <div className="App">
      <span>v.0.0.1</span>
      <h1>Gifland</h1>
      <div>
        <button onClick={loadgifs}>Load new GIFs</button>
      </div>
      <div className="gifsContainer">
        {gifs.map((gif, key) => (
          <img key={key} src={gif.media_formats.gif.url} alt="" />
        ))}
      </div>
    </div>
  )
}

export default App
