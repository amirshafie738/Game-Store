import toast from "react-hot-toast"
import "./Card.css"

function Card({ gameData }) {

    return (

        <div className="card">

            <div className="card-img-container">
                <img className="card-img" src={gameData.image}></img>
                <svg className="card-heart" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
            </div>

            <div className="cart-details">
                <p className="card-name">{gameData.title}</p>
                <p className="card-genre">{gameData.genre}</p>
                <p className="card-desc">{gameData.description}</p>

                <div className="cart-details-bottom">
                    <p className="card-price"><span>$</span> {gameData.price}</p>
                    <p onClick={() => { toast.success('Game added to cart') }} className="card-btn"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg></span>Add to Cart</p>
                </div>

            </div>

        </div>

    )
}

export default Card