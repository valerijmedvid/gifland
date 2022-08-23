import { useEffect, useState } from "react"
import GifList from "./components/GifList"
import GithubCorner from "./components/GithubCorner"

function App() {
  const [emoji, setEmoji] = useState("")
  const [emoji2, setEmoji2] = useState("")
  const emojiArray = ["🚀", "🏀", "🏈", "⚾️", "🚂", "🚆", "🚇", "🎀", "🎊", "🎉", "🏆", "👽", "💀", "🐵"]

  useEffect(() => {
    setEmoji(emojiArray[Math.floor(Math.random() * emojiArray.length)])
    setEmoji2(emojiArray[Math.floor(Math.random() * emojiArray.length)])
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="App">
      <h1>
        {emoji} Gifland {emoji2}
      </h1>
      <GithubCorner />
      <GifList />
    </div>
  )
}

export default App
