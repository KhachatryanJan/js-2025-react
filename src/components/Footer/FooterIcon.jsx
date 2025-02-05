import "./FooterIcon.css"
import email from "../images/email.png"
import place from "../images/place .png"
import clock from "../images/clock .png"
import call from "../images/phone-call.png"
import FooterIconP from "./FooterIconP"
function FooterIcon() {
  return (
    < div className="box-3">
      <div className="footer-icon2">
        <img src={email}></img>
        <img src={place}></img>
        <img src={clock}></img>
        <img src={call}></img>
      </div>
      <FooterIconP />
    </div>
  )
}

export default FooterIcon