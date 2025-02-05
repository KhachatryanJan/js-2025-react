import { useState } from "react"
import "./AvatarName.css"
import sing from "../images/sing.png"
import UserPaje from "../UserPaje"

function AvatarName() {
  const [userInfo, setUserInfo] = useState(false)
  return (
    <>
      <div className="avat-name">
        <p className="name-p"> Артем Свиридов</p>
        <img src={sing} className="sing-img" onClick={() => {
          setUserInfo(!userInfo)
        }} ></img>
      </div>
      <div className={` ${userInfo ? "active-info":""}`}>
        <UserPaje />
      </div>
      {userInfo && <div className="active-info">
        <UserPaje />

        </div>}
      
    </>
  )
}

export default AvatarName