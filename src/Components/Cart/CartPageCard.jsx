
const CartPageCard = ({item, decrementQuantity, incrementQuantity}) => {
    return (
        <div
            className="SingleProductCard"
            style={{ color: "black", backgroundColor: "white" }}
            key={item.id}
        >
            <div className="product-image">
                <img src={item.image} alt={item.title} />
            </div>
            <div >
                <h2>{item.title}</h2>
                <h4>₹{item.price}</h4>
                <span>
                    <span style={{ fontWeight: "bold" }}>Quantity: </span>
                    {item.quantity}
                </span>
                <div className="cart-buttons">
                    <button onClick={() => decrementQuantity(item)}>-</button>
                    <button onClick={() => incrementQuantity(item)}>+</button>
                </div>
            </div>
        </div>
    )
}
export default CartPageCard;