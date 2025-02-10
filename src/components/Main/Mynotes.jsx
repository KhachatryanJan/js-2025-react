
import { useContext, useMemo } from "react"
import "./Mynotes.css"
import { LanguageContexte } from "../../context/languageContexte"
import { translate } from "../../utils/translate"
import doctorsDate from "../../DoctorsInfromation/doctorsInfromation.json"
import DateManthOligaFull from "./DateManthOligaFull"
import { Link } from "react-router-dom"



function Mynots() {
    const { lang } = useContext(LanguageContexte)


    const currentDate = new Date();

    const pastFuttments = useMemo(() => {
        return doctorsDate.filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate < currentDate
        })
    }, [doctorsDate, currentDate])
    const but = () => {
        console.log("ff:", pastFuttments)

    }

    const Futtments = useMemo(() => {
        return doctorsDate.filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate > currentDate
        })
    }, [doctorsDate, currentDate])

    const but1 = () => {
        console.log("ff:", pastFuttments)

    }

    return (
        <>
            <div className="my-notes"><p className="my-notes-p">{translate("MyEntries", lang)}</p></div>
            <div className="UpcomingPastCanceled">
              <Link to="/Upcoming"> <p className="hov-p" onClick={but}>{translate("Upcoming", lang)}</p></Link>
               <Link to="/Past" ><p className="hov-p"onClick={but1}  >{translate("Past", lang)}</p></Link>
                <p className="hov-p">{translate("Canceled", lang)}</p>
            </div >


            {
                pastFuttments.map((doc) => (
                    <DateManthOligaFull id={doc.id} {...doc} />
                ))

            }
            
            {
                Futtments.map((doc) => (
                    <DateManthOligaFull id={doc.id} {...doc} />
                ))

            }

        </>
    )
}

export default Mynots