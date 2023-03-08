
function ProductCard({ title, price, image, category, brand }) {
    return (
        <div className="ProductCard" style={{ color: 'black', backgroundColor: 'white' }}>
            <div>
                <img data-testid="product-image" src={image} alt={title} />
            </div>
            <div className="ProductCard2">
                <h2 >{title}</h2>
                <h4 >₹{price}</h4>
                <p >{category}</p>
                <p >{brand}</p>
            </div>

        </div>
    )
}
export default ProductCard;