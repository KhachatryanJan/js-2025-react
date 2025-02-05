import "./InstFacYut.css"
import insta from"../images/instagram 1.png"
import face from "../images/facebook 1.png"
import youtube from "../images/youtube 3.png"
function  InstFacYut(){
    return(
        <div className="footer-icon">
        <img src={insta}></img>
        <img src={face}></img>
        <img src={youtube}></img>
      </div>
    )
}

export default InstFacYut