
import { useContext, useMemo, useState } from "react"
import "./Mynotes.css"
import { LanguageContexte } from "../../context/languageContexte"
import { translate } from "../../utils/translate"
import doctorsDate from "../../DoctorsInfromation/doctorsInfromation.json"
import DateManthOligaFull from "./DateManthOligaFull"
import { Link } from "react-router-dom"
import { DoctorContexte } from "../../context/DoctorConstext"



function Mynots() {
    const { lang } = useContext(LanguageContexte)


    const currentDate = new Date();

    const pastFuttments = doctorsDate.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate > currentDate;
    });
 

    const [doc, setDoc] = useState(doctorsDate)

    const Futtments = useMemo(() => {
        return doctorsDate.filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate > currentDate
        })
    }, [ currentDate])

 

    return (
        <>
            <div className="my-notes"><p className="my-notes-p">{translate("MyEntries", lang)}</p></div>
            <div className="UpcomingPastCanceled">
            <Link to="/Upcoming"> <p className={`hov-p ${doc === pastFuttments}`}onClick={() => {
                    setDoc(pastFuttments)
                }}>{translate("Upcoming", lang)}</p></Link >
               <Link to="/Past" ><p className={`hov-p ${doc === Futtments}`}onClick={() => {
                    setDoc(Futtments)
                }} >{translate("Past", lang)}</p></Link>
                <p className="hov-p">{translate("Canceled", lang)}</p>
            </div >


    

    {
        Futtments.map((doc) => (
            <DateManthOligaFull id={doc.id}  name={doc.name}{...doc} />
        ))

    }

        </>
    )
}

export default Mynots