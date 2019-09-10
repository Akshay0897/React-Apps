import React from 'react'
import './collection-item.component.scss'
import Customebutton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({ item ,addItem }) =>{ 
    const {id,imageUrl,price,name} = item
    return (
    <div className='collection-item'>
        <div
            style = {{
                backgroundImage :`url(${imageUrl})`
                }}
            className = 'image'
        />
        <div className = 'collection-footer'>
            <span className = 'name'>{name}</span>
            <span className = 'name'>{price}</span>
        </div>
        <Customebutton inverted onClick={() => addItem(item)}> Add to Cart</Customebutton>
    </div>
);

}
const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})


export default connect(
    null,
    mapDispatchToProps)
    (CollectionItem);