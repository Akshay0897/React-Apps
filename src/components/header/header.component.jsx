import React from 'react';
//import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selecters'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';
import {OptionLink,OptionsContainer,HeaderContainer,LogoContainer} from './header.styles';
import { SignOutStart } from '../../redux/user/user.actions';

const Header = ({currentUser,hidden,signOutStart}) => (
    
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT US</OptionLink>
            {
                currentUser ? (
                <OptionLink as='div' onClick={signOutStart} >
                    signOut
                </OptionLink>
                ) :
                ( <OptionLink to='/signin'>SIGNIN</OptionLink> )
            } 
            <CartIcon />    
        </OptionsContainer>
        { hidden ? <Cart /> : '' }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(SignOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);