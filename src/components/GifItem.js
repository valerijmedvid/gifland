import { FiLink } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"

function GifItem(prop) {
  return (
    <div className="gifItem">
      <div className="overlay-top">
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
      <img src={prop.gif.media_formats.tinygif.url} alt={prop.gif.content_description} />
      <div className="overlay-bottom">{prop.gif.tags.slice(0, 4).map((tag) => `#${tag} `)}</div>
    </div>
  )
}

export default GifItem
