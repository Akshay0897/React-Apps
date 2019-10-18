import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import CustomeButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions'; 
import {withRouter} from 'react-router-dom';

const Cart = ({cartItems, history, dispatch}) => 
{
return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map((item) => (
                <CartItem key={item.id} item={item}/> ))
            }

            { 
                cartItems.length <= 0 ? 
                <span>Your cart is empty</span> : '' 
            } 
                <CustomeButton onClick = {() => { 
                  history.push('/checkout')
                  dispatch(toggleCartHidden())
                }

            }>Go To Checkout</CustomeButton>
        </div>
    </div>
);
}

const mapStateToProps = (state) => 
{
    return {
    cartItems: selectCartItems(state)
}}

export default withRouter(connect(mapStateToProps)(Cart))