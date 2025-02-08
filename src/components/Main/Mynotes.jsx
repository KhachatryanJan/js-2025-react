
import { useContext, useMemo } from "react"
import "./Mynotes.css"
import { LanguageContexte } from "../../context/languageContexte"
import { translate } from "../../utils/translate"
import doctorsDate from "../../DoctorsInfromation/doctorsInfromation.json"
import DateManthOligaFull from "./DateManthOligaFull"

function Mynots() {
    const { lang } = useContext(LanguageContexte)

    const currentDate = new Date();

    const pastAppointments = useMemo(() => {
        return doctorsDate.filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate < currentDate
        })
    }, [doctorsDate, currentDate])

    const futureAppointments = useMemo(() => {
        return doctorsDate.filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate > currentDate
        })
    }, [doctorsDate, currentDate])

    const handlePastClick = () => {
        console.log("Past Appointments:", pastAppointments);
    };

    const handleFutureClick= () => {
        console.log("Fff Appointments:",futureAppointments );
    };

    return (
        <>
            <div className="my-notes"><p className="my-notes-p">{translate("MyEntries", lang)}</p></div>

            <div className="UpcomingPastCanceled">
                <p className="hov-p" onClick={handlePastClick}>{translate("Upcoming", lang)}</p>
                <p className="hov-p" onClick={handleFutureClick} >{translate("Past", lang)}</p>
                <p className="hov-p">{translate("Canceled", lang)}</p>
            </div>

         
            {
                pastAppointments.map((doc) => (
                    <DateManthOligaFull key={doc.id} date={doc.date} name={doc.name} lastname={doc.lastname} hour={doc.hour}  profession={doc.profession} experience={doc.experience}/>
                ))
            }
         
         {
               futureAppointments.map((doc) => (
                    <DateManthOligaFull key={doc.id} date={doc.date} name={doc.name} lastname={doc.lastname} hour={doc.hour}  profession={doc.profession} experience={doc.experience} />
                ))
            }

        </>
    )
}

export default Mynots