import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addGifs, saveNext } from "./store/gifList"
import GifList from "./components/GifList"
import GithubCorner from "./components/GithubCorner"
import TenorClient from "./tenorClient"

function App() {
  const emojiArray = ["🚀", "🏀", "🏈", "⚾️", "🚂", "🚆", "🚇", "🎀", "🎊", "🎉", "🏆", "👽", "💀", "🐵"]
  const [emoji, setEmoji] = useState("")
  const [emoji2, setEmoji2] = useState("")

  const [loading, setLoading] = useState(false)
  const gifList = useSelector((state) => state.gifList)
  const dispatch = useDispatch()

  const getRandomEmoji = () => {
    return emojiArray[Math.floor(Math.random() * emojiArray.length)]
  }

  const fetchData = () => {
    setLoading(true)
    TenorClient.featured(30, gifList.next).then((serchedGifs) => {
      dispatch(addGifs([...gifList.gifs, ...serchedGifs.results]))
      dispatch(saveNext(serchedGifs.next))
      setLoading(false)
    })
  }

  useEffect(() => {
    setEmoji(getRandomEmoji())
    setEmoji2(getRandomEmoji())
    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <h1>
        {emoji} Gifland {emoji2}
      </h1>
      <GithubCorner />
      <GifList fetchData={fetchData} show={loading} />
    </div>
  )
}

export default App
