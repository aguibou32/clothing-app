import React from 'react'
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import './CartDropdown.scss';

function CartDropdown({ cartItems }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.key} cartItem={cartItem} />
                    ))
                }
            </div>
            <CustomButton> GO TO CHECKOUT </CustomButton>
        </div>
    )
}

const mapStateToProps = (store) => ({
    cartItems: store.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);

