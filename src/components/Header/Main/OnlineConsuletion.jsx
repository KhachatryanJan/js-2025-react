
import { useContext } from "react"
import "./OnlineConsuletion.css"
import { LanguageContexte } from "../../../context/languageContexte"
import { translate } from "../../../utils/translate"

function OnlinneConsuletion(){
  const {lang}=useContext(LanguageContexte)
  return(
    <div>
        <h1 className="consul-h1">{translate("OnlineConsultationsFromSpecialistDoctors",lang)}<br/>{translate("OnlineConsultationsFromSpecialistDoctors1",lang)}</h1>
        <div className="Orange-squares"></div>

        <p className="consul-p">{translate("Consult",lang)}<b className="b-col">{translate("Now",lang)}</b><div className="Orange-squares1"></div> {translate("orBy",lang)} <b className="b-col">{translate("pre-registration",lang)}</b><div className="Orange-squares2"></div><br/>
        {translate("fromYourComputerOrUsingOurApplication",lang)},<br/>
        {translate("availableIn",lang)}<span className="blue-sp"> App Store </span>и <span className="blue-sp">Google Play</span></p>
    </div>
  )
}

export default OnlinneConsuletion