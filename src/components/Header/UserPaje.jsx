import "./UserPaje.css"
import MYProfile from "./MyProfile"
import TopUpBalance from "./TopUpBalance"
import FAQ from "./FAQ"
import LogOut from "./LogOut"
function UserPaje() {

    return (
        < div className="userPaje">
            <MYProfile />
            <TopUpBalance />
            <FAQ/>
            <LogOut/>
        </div>
    )
}


export default UserPaje