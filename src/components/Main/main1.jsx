import OnlinneConsuletion from "./OnlineConsuletion"
import SignUpButton from "./SignUpButton"
import DoctorImg from "./DoctorImg"
import MakeAnAppointmenWithADoctor from "./MakeAnAppointment"
import Mynots from "./Mynotes"
import { Outlet } from "react-router-dom"




function Main() {
    return (
        <>
            <OnlinneConsuletion />
            <SignUpButton />
            <DoctorImg />
            <MakeAnAppointmenWithADoctor/>
            
            <Mynots/>
            <Outlet/>
        
          
        </>
    )
}

export default Main