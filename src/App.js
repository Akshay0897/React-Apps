import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Link,Switch,Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth,createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selecters'
import {createStructuredSelector} from 'reselect';
import Checkout  from './components/pages/checkout/checkout.component'

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }

unsubscribefromAuth = null ;

componentDidMount(){
  const {setUser} = this.props;
  console.log(this.props);
  this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
    //createUserProfileDocument(user);
    const userref = await createUserProfileDocument(userAuth);
    //console.log(userAuth);
    userref.onSnapshot(snapShot => {
      setUser({
      id:snapShot.id,
      ...snapShot.data() 
      }) 
    }) 
   }
   setUser(userAuth);
 })
}

componentWillUnmount(){
  this.unsubscribefromAuth();
}

handleClick = (e) => {
    console.log('clicked',e.target)

}

render() 
 {
  return (
    <div onClick={this.handleClick}>
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' render={routeProps =>{ return <ShopPage {...routeProps}/> } } />
      <Route path='/checkout' render={routeProps => { return <Checkout {...routeProps} /> } } />
      <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />) } />
      </Switch>
  </div>
  );
 }
}

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
