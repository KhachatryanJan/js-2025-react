import "./DoctorImg.css"
import rightUp from"../../images/rightUp.png"
import rightUp2 from "../../images/rightUp2.png"
import docfon from "../../images/docFon.png"
import docBody from "../../images/doxBody.png"

function DoctorImg(){
  return(
    <div className="doc">
        <img src={rightUp} className="bacKapuyt"></img>
        <img src={rightUp2} className="mug"></img>
        <img src={docfon} className="docFon"></img>
        <img src={docBody} className="docBody"></img>
    </div>
  )
}

export default DoctorImg