import { useContext } from "react"
import "./Mynotes.css"
import { LanguageContexte } from "../../../context/languageContexte"
import { translate } from "../../../utils/translate"


function Mynots(){
    const {lang}=useContext(LanguageContexte)
 return(
    <>
    <div className="my-notes"><p className="my-notes-p">{translate("MyEntries",lang)}</p></div>

                <div className="UpcomingPastCanceled">
                    <p className="hov-p">{translate("Upcoming",lang)}</p>
                    <p className="hov-p">{translate("Past",lang)}</p>
                    <p className="hov-p">{translate("Canceled",lang)}</p>
                </div>
        </>
 )
}

export default Mynots