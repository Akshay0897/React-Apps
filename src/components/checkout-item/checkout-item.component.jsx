import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {removeItem,addItem,removeItemByOne} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem,removeItem,addItem,removeItemByOne}) => (
 <div className='checkout-item'>
     <div className='image-container'>
         <img src={cartItem.imageUrl} alt=""/>
     </div>
     <span className='name'>{cartItem.name}</span>
     <span className='quantity'>
     <div className='arrow' onClick = {() => removeItemByOne(cartItem)}> &#10094; </div>
     {cartItem.quantity}
     <div className='arrow' onClick = {() => addItem(cartItem)}> &#10095; </div>
     </span>
     <span className='price'>{cartItem.price}</span>
     <div className='remove' onClick={() => removeItem(cartItem)}> &#10005; </div>
 </div>

);

const mapDispatchToProps = dispatch => ({
    removeItem: (item) => dispatch(removeItem(item)),
    addItem : (item) => dispatch(addItem(item)),
    removeItemByOne : (item) => dispatch(removeItemByOne(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
