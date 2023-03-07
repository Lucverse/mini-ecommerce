
function ProductCard({ title, price, image, category, brand }) {
    return (
        <div className="ProductCard" style={{ color: 'black' }}>
            <img data-testid="product-image" src={image} height="250px" alt={title} />
            <b data-testid="product-title">{title}</b>
            <span data-testid="product-price">₹{price}</span>
            <p data-testid="product-category">{category}</p>
            <p data-testid="product-category">{brand}</p>

        </div>
    )
}
export default ProductCard;