import { useState } from "react"
import "./OrangeCircle.css"


function OrangeCircle(){
   const [number,setNumber ]=useState(3)
   return(
      
    <div className="num-cricle">{number}</div>
  
 
   )
}

export default OrangeCircle