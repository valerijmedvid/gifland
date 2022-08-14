import { useEffect, useState } from "react"
import TenorClient from "../tenorClient"
import GifItem from "./GifItem"
import Loading from "./Loading"
import { useSelector, useDispatch } from "react-redux"
import { addGifs, saveNext } from "../store/gifList"

function GifList() {
  const [loading, setLoading] = useState(false)
  const gifList = useSelector((state) => state.gifList)
  const dispatch = useDispatch()

  const fetchData = () => {
    setLoading(true)
    TenorClient.featured(3, gifList.next).then((serchedGifs) => {
      localStorage.setItem("gifNext", serchedGifs.next)
      dispatch(addGifs([...gifList.gifs, ...serchedGifs.results]))
      dispatch(saveNext(serchedGifs.next))
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="gifsContainer">
        {gifList.gifs.map((gif, key) => (
          <GifItem gif={gif} key={key} />
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            fetchData()
          }}
        >
          Load more...
        </button>
      </div>

      <Loading show={loading} />
    </div>
  )
}

export default GifList
