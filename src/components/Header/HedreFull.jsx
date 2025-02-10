import "./HederFull.css"

import Logo from "./Logo"
import MyInfo from "./MyInfoHeder"
import SubOrangCirc from "./subOrangCric"
import AvatarNameSing from "./AvatarNameSing"
import Langvige from "./Langvige"



function HeaderFull(){
  return(
    <>
    <div className="Contener">
    <Logo></Logo>
    <MyInfo/>
    <SubOrangCirc/>
    <AvatarNameSing/>
    <Langvige/>
    </div>

  
    </>
  )
}

export default HeaderFull