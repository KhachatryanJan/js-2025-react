import card from "./images/credit-card (3) 1.png"

function TopUpBalance(){
    return(
      <div className="TopUpBalance">
        <img src={card} className="img"></img>
        <p className="p">Пополнить баланс</p>
      </div>
    )
}

export default TopUpBalance