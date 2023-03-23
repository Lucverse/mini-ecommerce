
function ProductCard({ title, price, image, category, brand }) {
    return (
        <div className="ProductCard" style={{ color: 'black', backgroundColor: 'white' }}>
            <div>
                <img src={image} alt={title} />
            </div>
            <div className="ProductCard2">
                <h2 >{title}</h2>
                <p><span style={{ fontWeight: 'bold' }}>Price: </span> ₹ {price}</p>
                <p><span style={{ fontWeight: 'bold' }}>Category: </span>{category}</p>
                <p><span style={{ fontWeight: 'bold' }}>Brand: </span>{brand}</p>
            </div>
        </div>
    )
}

export default ProductCard;