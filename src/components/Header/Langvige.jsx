import { useContext } from "react"
import "./Langvige.css"
import { LanguageContexte } from "../../context/languageContexte"
import { translate } from "../../utils/translate"

const Languages=()=>{
    const {lang,setLang}= useContext(LanguageContexte)
   // const [lang,setLang]=useState("ru")
    return(
        <div className="lang">
        <div className={`ru  ${lang === "ru"? "active":"" }`}onClick={()=>{
            setLang("ru")
        }}> RU </div>
        <div className={`en ${lang === "en" ? "active":""}`}onClick={()=>{
             setLang("en")
            
        }}>EN </div>
        </div>
    )
}

export default Languages