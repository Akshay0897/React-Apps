import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selecters'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';

const Header = ({currentUser,hidden}) => (
    
    <div className = 'header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT US</Link>
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()} >
                    signOut
                </div>
                ) :
                (<Link className='option' to='/signin'>SIGNIN</Link>)
            } 
            <CartIcon />    
        </div>
        { hidden ? <Cart /> : '' }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);