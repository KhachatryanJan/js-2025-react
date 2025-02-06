import user from "../images/user (3) 1.png"
function MYProfile(){
    return(
        <div className="MyProfile">
           <img src={user} className="img"></img>
           <p className="p">Мой профиль</p>
        </div>
    )
}

export default MYProfile