


import { useContext, useMemo } from "react"
import "./Mynotes.css"
import { LanguageContexte } from "../../../context/languageContexte"
import { translate } from "../../../utils/translate"
import doctorsDate from "../../../DoctorsInfromation/doctorsInfromation.json"


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

    const handleFuturClick = () => {
        console.log("Futur Appointments:", futureAppointments);
    };

    return (
        <>
            <div className="my-notes"><p className="my-notes-p">{translate("MyEntries", lang)}</p></div>

            <div className="UpcomingPastCanceled">
                <p className="hov-p" onClick={handlePastClick}>{translate("Upcoming", lang)}</p>
                <p className="hov-p" onClick={handleFuturClick}>{translate("Past", lang)}</p>
                <p className="hov-p">{translate("Canceled", lang)}</p>
            </div>

            <div className="doc-cont1">
                {pastAppointments.map((doc) => {
                    return (
                        <div className="doc-name-experience">
                            <h3 className="name">{doc.name}{doc.lastName}</h3>
                            <p className="Pediatrician">{translate(/*"Pediatrician",lang*/)} {doc.profession}</p>
                            <p className="experience">{translate(/*"yearsOfExperience",lang*/)}{doc.experience}</p>
                        </div>
                    )
                })}
            </div>


        </>
    )
}

export default Mynots