
import { useContext } from "react"
import "./ReadMoreFooterP.css"
import { LanguageContexte } from "../../context/languageContexte"
import { translate } from "../../utils/translate"

function ReadMoreFooterP(){
  const {lang} =useContext(LanguageContexte)
    return(
        <div className="box-2">
        <p className="foot-box-2-p">{translate("HowToUse",lang)}</p>
        <p className="foot-box-2-p">{translate("answersToquestions",lang)}</p>
        <p className="foot-box-2-p">{translate("Fordoctors",lang)}</p>
        <p className="foot-box-2-p">{translate("AboutTheService",lang)}</p>
        <p className="foot-box-2-p">{translate("Contacts",lang)}</p>
        <p className="foot-box-2-p">{translate("UserAgreement",lang)}</p>
      </div>
    )
}

export default ReadMoreFooterP