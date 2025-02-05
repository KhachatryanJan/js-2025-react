import "./Avatar.css"
import orangCircle from "../images/orangCircle.png"

function Avatar(){
  return (
    <div className="avat">
   <img src={orangCircle} className="avat-img"></img>
   <p className="avat-p">A</p>
   </div>
  )
}

export default Avatar