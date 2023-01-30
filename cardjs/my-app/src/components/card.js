const Card = ({ cards }) => {

    return (
        <div className="shop-main-container">
            {cards.map((card) => (

                <div className="shop-secondary-container">

                    <img src={card.images} alt="" className="image" />

                    <div className="shop-title-price">
                        <h2>{card.cardTitle}</h2>
                        <h4>${card.price}</h4>
                    </div>

                    <div className="card-rating-buy-now">
                        <p>{card.rating} rating</p>
                        <button>BUY NOW</button>
                    </div>

                </div>

            ))}
        </div>
    )
};

export default Card;