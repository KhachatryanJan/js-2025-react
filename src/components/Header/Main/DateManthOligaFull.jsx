import "./DateManthOligaFull.css"
import DateManth from "./dataManth"
import Docimg from "./docimg"
import DocNamePediatricanExperience from "./DocNamePediatricianExperience"
import ViewEntryButton from "./ViewEntryButton"

function DateManthOligaFull(){
   return(
    < div className="doc-cont1">
     <DateManth/>
     <Docimg/>
     <DocNamePediatricanExperience/>
     <ViewEntryButton/>

     </div>
   )
}

export default DateManthOligaFull