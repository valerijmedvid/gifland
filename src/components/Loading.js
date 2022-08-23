import { useRef, useEffect, useState } from "react"
import { FaSyncAlt } from "react-icons/fa"

function Loading({ fetchData, loading }) {
  const myRef = useRef()
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setVisibility(entries[0].isIntersecting)
    })
    observer.observe(myRef.current)

    if (visibility) {
      fetchData()
    }
  }, [visibility]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={myRef}>
      <FaSyncAlt id="loading" className={"loading-icon" + (loading ? "" : " hideElement")} />
    </div>
  )
}

export default Loading
