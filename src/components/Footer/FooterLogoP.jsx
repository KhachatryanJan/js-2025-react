import "./FooterLogoP.css"
import logo2 from "../images/log2.png"
import { useContext } from "react"
import { LanguageContexte } from "../../context/languageContexte"
import { translate } from "../../utils/translate"

function FooterLogoP() {
  const {lang}=useContext(LanguageContexte)
    return (
       <>
               <img src={logo2} className="footer-log"></img>
                 <div className="footer-p">
                  <p className="footer-p-tex">{translate("OnlineConsultations1",lang)} <br/> {translate("OnlineConsultations2",lang)} <br/></p>
                 <p className="p-marg"> {translate("OnlineConsultations3",lang)}<br/> {translate("OnlineConsultations4",lang)}<br/>{translate("OnlineConsultations5",lang)}</p>
                 </div>
                 </>
  )
}

export default FooterLogoP