import "./MakeAnAppointment.css"
import doctor from "../../images/Doctotr.png"
import yelloCir from "../../images/yelloCir.png"
import { useContext } from "react"
import { LanguageContexte } from "../../../context/languageContexte"
import { translate } from "../../../utils/translate"

function MakeAnAppointmenWithADoctor() {
    const {lang}=useContext(LanguageContexte)
    return (
     <div className="cont">
        <div className="MakeAnAppointmentWithADoctor">
            <img src={doctor} className="doctor"></img>
            <div className="MakeAnAppointmentWithADoctor-info">
                <h1 className="MakeAnAppointmentWithADoctor-info-h1">{translate("MakeAnAppointmentWithADoctor",lang)} <div className="oranjLin3"></div></h1>
                <p className="MakeAnAppointmentWithADoctor-info-p1">{translate("doctorsSpecializations",lang)}</p>
                <div className="YellowCircle-inf">
                    <div className="YellowCircle">
                        <img src={yelloCir}></img>
                        <img src={yelloCir}></img>
                        <img src={yelloCir}></img>
                    </div>
                    <div className="p-text3">
                        <p>{translate("timeConvenient",lang)}</p>
                        <p>{translate("experiencedDoctors",lang)}</p>
                        <p>{translate("clearExplanation",lang)}</p>
                    </div>

                </div>
                <p className="MakeAnAppointmentWithADoctor-info-p2">{translate("SignUp",lang)}</p>
            </div>
        </div>
        </div>
    )

}


export default MakeAnAppointmenWithADoctor