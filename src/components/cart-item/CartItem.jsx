import React from 'ireact'
import './CartItem.scss';

function CartItem({item:{imageUrl, price, name}}) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">

            </div>
            div
        </div>
    )
}

export default CartItem
