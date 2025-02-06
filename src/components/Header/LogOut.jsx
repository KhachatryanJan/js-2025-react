import logout from "../images/logout (1) 1.png"


function LogOut(){
    return(
     <div className="LogOut">
    <img src={logout} className="img" />
       <p className="p">Выйти</p>
     </div>
    )
}

export default LogOut