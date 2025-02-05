import "./HederFull.css"

import Logo from "./Logo"
import MyInfo from "./MyInfoHeder"
import SubOrangCirc from "./subOrangCric"
import AvatarNameSing from "./AvatarNameSing"
import Langvige from "./Langvige"

import Main from "./Main/main1"


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

   <Main/>
    </>
  )
}

export default HeaderFull