import { createContext, useState } from "react";
import doctorsDate from "../DoctorsInfromation/doctorsInfromation.json";

export const DoctorContexte= createContext();


const DoctorProvider = ({ children }) => {
    const currentDate = new Date();

    const pastFuttments = doctorsDate.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate > currentDate;
    });
     const [doc,setDoc]=useState(pastFuttments)
      return(
             <DoctorContexte.Provider value={{doc, setDoc}}>
                 {children}
             </DoctorContexte.Provider>
          )
}


export default DoctorProvider