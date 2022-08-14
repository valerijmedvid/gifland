import { FiLink } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"

function GifItem(prop) {
  return (
    <div className="gifItem">
      <div className="overlay2">
        <span
          onClick={() => {
            navigator.clipboard.writeText(`![](${prop.gif.media_formats.gif.url})`)
          }}
        >
          <BsGithub />
        </span>
        <span
          onClick={() => {
            navigator.clipboard.writeText(prop.gif.media_formats.gif.url)
          }}
        >
          <FiLink />
        </span>
      </div>
      <img src={prop.gif.media_formats.gif.url} alt={prop.gif.content_description} />
      <div className="overlay">{prop.gif.tags.slice(0, 4).map((tag) => `#${tag} `)}</div>
    </div>
  )
}

export default GifItem
