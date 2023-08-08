const OrderButton = ({ handleButtonClick, orderState }) => {
    return (
        <button
            className={`place-order place-order--${orderState}`}
            onClick={handleButtonClick}
        >
            <div className="default text">Place Order</div>
            <div className="forklift">
                <div className="upper"></div>
                <div className="lower"></div>
            </div>
            <div className="box animation"></div>
            <div className="done text">Done</div>
        </button>
    )
}
export default OrderButton;