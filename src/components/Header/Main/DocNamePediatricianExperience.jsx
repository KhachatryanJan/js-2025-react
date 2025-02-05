import { useContext } from "react"
import "./DocNamePediatricianExperience.css"
import { LanguageContexte } from "../../../context/languageContexte"
import { translate } from "../../../utils/translate"

function DocNamePediatricanExperience(){
    const {lang}=useContext(LanguageContexte)
    return(
        <div className="doc-name-experience">
        <h3 className="name">Ольга Никитина</h3>
        <p className="Pediatrician">{translate("Pediatrician",lang)}</p>
        <p className="experience">{translate("yearsOfExperience",lang)}</p>
    </div>
    )
}

export default DocNamePediatricanExperience