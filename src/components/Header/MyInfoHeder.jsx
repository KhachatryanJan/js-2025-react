import "./MyInfoHeder.css"
import { translate } from "../../utils/translate"
import {  useContext } from "react"
import { LanguageContexte } from "../../context/languageContexte"


function MyInfo(){
 const {lang}=useContext(LanguageContexte)
  return(
    <div className="MyInfo">
        <p className="MyInfo-p"> {translate("HowToUse" ,lang)}</p>
        <p className="MyInfo-p">{translate("MyEntries", lang)}</p>
        <p className="MyInfo-p"> {translate ("MakeAnAppointmentWithADoctor", lang) }</p>
    </div>
  )
}

export default MyInfo