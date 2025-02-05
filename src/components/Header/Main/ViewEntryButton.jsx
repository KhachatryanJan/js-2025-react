import { useContext } from "react"
import "./ViewEntryButton.css"
import { LanguageContexte } from "../../../context/languageContexte"
import { translate } from "../../../utils/translate"

function ViewEntryButton() {
    const {lang}=useContext(LanguageContexte)
    return (
        <>
        <div className="Butt-Planned-ViewEntry-ViewTheResolution">
            <button className="but3"><p className="Planned">{translate("Planned",lang)}</p></button>
            <button className="but4"><p className="ViewEntry">{translate("ViewTheRecording",lang)}</p></button>
            <button className="but5"><p className="ViewTheResolution">{translate("ViewTheDecree",lang)}</p></button>
        </div>

     
        </>
    )
}

export default ViewEntryButton
