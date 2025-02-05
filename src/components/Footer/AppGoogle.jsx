import "./AppGoogle.css"
import appDow from "../images/AppDow.jpg"
import google from "../images/googlePL.png"

function AppGoogle() {
    return (
        <div className="App-Goog">
            <img src={appDow} className="app"></img>
            <img src={google}></img>
        </div>
    )
}

export default AppGoogle