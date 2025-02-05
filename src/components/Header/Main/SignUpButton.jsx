import { useContext } from "react"
import "./SignUpButton.css"
import { LanguageContexte } from "../../../context/languageContexte"
import { translate } from "../../../utils/translate"


function SignUpButton(){
    const {lang}=useContext(LanguageContexte)
    return (
        <div className="butt">
            <button className="butt-sig">{translate("SignUp",lang)}</button>
            <button className="butt-sig1">{translate("HowDoesThisWork",lang)}</button>
        </div>
    )

}

export default SignUpButton