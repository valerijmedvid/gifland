import GifItem from "./GifItem"
import Loading from "./Loading"
import { useSelector } from "react-redux"

function GifList({ fetchData, loading }) {
  const gifList = useSelector((state) => state.gifList)

  return (
    <div>
      <div className="gifsContainer">
        {gifList.gifs.map((gif, key) => (
          <GifItem gif={gif} key={key} />
        ))}
      </div>
      <Loading fetchData={fetchData} loading={loading} />
    </div>
  )
}

export default GifList
