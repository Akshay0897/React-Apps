import React,{Component,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Link,Switch,Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth,createUserProfileDocument, AddShopData } from './firebase/firebase.util';
import { setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selecters'
import { selectCollectionforPreview } from './redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect';
import Checkout  from './components/pages/checkout/checkout.component';
import styled from  'styled-components';
import {checkUserSession} from './redux/user/user.actions';

const App = ({checkUserSession,currentUser}) => {
  
useEffect(() => {  checkUserSession() } ,[checkUserSession]);

const handleClick = (e) => {
    console.log('clicked',e.target)
}

  return (
    <div onClick={handleClick}>
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' render={routeProps =>{ return <ShopPage {...routeProps}/> } } />
      <Route path='/checkout' render={routeProps => { return <Checkout {...routeProps} /> } } />
      <Route path='/signin' render={(routeProps) => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp {...routeProps}/>) } />
      </Switch>
  </div>
  );
 }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser  
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
 