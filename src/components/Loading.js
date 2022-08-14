import { FaSyncAlt } from "react-icons/fa"

function Loading(props, refs) {
  return (
    <div>
      <FaSyncAlt id="loading" className={"loading-icon" + (props.show ? "" : " hideElement")} />
    </div>
  )
}

export default Loading
