import "./DateManthOligaFull.css"
import { LanguageContexte } from "../../context/languageContexte"
import { translate } from "../../utils/translate"
import date from "../images/calendar (2) 1.png"
import clock from "../images/clock 1.png"
import video from "../images/video-camera .png"
import { useContext } from "react"
import oliga from "../images/Oliga.png"


function DateManthOligaFull(doc) {

   const { lang } = useContext(LanguageContexte)

   return (
      < div className="doc-cont1">

         <div className="data-videomunication">
               
            <img src={date} className="data"></img>
            <p className="dat">{doc.date}</p>
            <img src={clock} class="hour"></img>
            <p className="clock">{doc.hour}</p>
            <img src={video} className="video"></img>
            <p className="video-p">{translate("VideoCommunication", lang)}</p>
         </div>

         <img src={oliga} className="Oliga"></img>


         <div className="doc-name-experience">
            <h3 className="name">{doc.name} {doc.lastname}</h3>
            <p className="Pediatrician">{doc.profession}</p>
            <p className="experience">{doc.experience}</p>
         </div>

         <div className="Butt-Planned-ViewEntry-ViewTheResolution">
            <button className="but3"><p className="Planned">{translate("Planned",lang)}</p></button>
            <button className="but4"><p className="ViewEntry">{translate("ViewTheRecording",lang)}</p></button>
            <button className="but5"><p className="ViewTheResolution">{translate("ViewTheDecree",lang)}</p></button>
        </div>
       
      </div>
   )
}

export default DateManthOligaFull  