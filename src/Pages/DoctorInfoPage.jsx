import {  useParams } from "react-router-dom"
import "./DoctorInfoPage.css"
import vector2 from "../img/vector2.png"
import olga from "../img/Oliga.png"
import grape from "../img/Group.png"
import grape1 from "../img/group1.png"
import grap3 from "../img/grap3.png"
import mortarBoard from "../img/mortarBoard.png"
import doctorsDate from "../DoctorsInfromation/doctorsInfromation.json"
import {  useContext, useEffect, useState} from "react"
import { DoctorContexte } from "../context/DoctorConstext"

function DoctorInfoPage(){
  const {id} =useParams();
  
    const [doc,setDoc]=useState(doctorsDate)
 // const {doc,setDoc}=useContext(DoctorContexte)
  console.log(doc.id, doc.name);

  useEffect((()=>{
     const FoundDoctor=doctorsDate.find((doctor)=>doctor.id === id)
     console.log(FoundDoctor);
     
     setDoc(FoundDoctor)
  },[id]))

 
    return(
        <>
         <div className="Main-info">
          <div className="Doctors-profile">
                <div className="Doctors-Pediatrician-Doctors-profile">
                    <p className="Doctors-p">Врачи</p>
                    <img src={vector2} className="vector-2"></img>
                    <p className="Doctors-p"> Педиатр</p>
                    <img src={vector2} className="vector-2"></img>
                    <p className="Doctors-p">Профиль врача</p>
                </div>
                <div className="Olga-img-info">
                <img src={olga} className="olg-img"></img>
                    <div className="olga-info">
                        <p className="olga">{doc.name} {doc.lastname}</p>
                        <p className="Pediatrician1">{doc.profession}</p>
                        <p className="experience1"> {doc.experience}</p>
                    </div>
                    <div className="consultation-minutes">
                    <p className="consultation">900 / {doc.consultation}</p>
                    <p className="minutes">{doc.minutes}</p>
                    </div>
                </div>
                <div className="NearestEntry-SpecializationInTreatment">
                    <div className="Nearest-entry">
                        <img src={grape} className="grape"></img>
                        <p className="Nearest-entry-p">Ближайшая запись</p>
                    </div>
                    <p className="week-p">{doc.date}</p>
                </div>
                <div className="Education">
                    <img src={mortarBoard} className="mort-img"></img>
                    <p className="Education-p">Образование</p>
                </div>
                <p className="year">1992 - Российский Государственный Университет</p>
                <p className="year">1994 - Ординатура по специальности «Педиатрия»</p>

                <div className="SpecializesInTreatment">
                    <img src={grape1} className="grap1"></img>
                    <p className="SpecializesInTreatment-p">Специализируется на лечении</p>
                </div>
                <p className="lorem-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br/>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br/> commodo consequat. </p>
                <div className="Additionally">
                    <img src ={grap3} className="grap3"></img>
                    <p className="Additionally-p">Дополнительно</p>
                </div>
                <p className="lorem-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br/>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br/> commodo consequat. </p>
            </div>
            </div>
            
       </>
    )
}

export default DoctorInfoPage