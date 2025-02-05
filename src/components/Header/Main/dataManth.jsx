import "./dateManth.css"
import date from "../../images/date.png"
import video from "../../images/video-camera .png"
import { useContext } from "react"
import { LanguageContexte } from "../../../context/languageContexte"
import { translate } from "../../../utils/translate"

function DateManth(){
    const {lang}=useContext(LanguageContexte)
   return(
   
    <div className="data-videomunication">
        <img src={date} className="data"></img>
        <img src={video} className="video"></img>
        <p className="video-p">{translate("VideoCommunication",lang)}</p>
    </div>
    
   )
}

export default DateManth