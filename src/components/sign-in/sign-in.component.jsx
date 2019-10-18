import React,{Component,useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions';
import {connect} from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selecters';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';

const SignIn = ({googleSignInStart, loggingIn,emailSignInStart,match,history}) => {  

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
    

const handleSubmit = async e => {
    console.log(e)
    e.preventDefault();
    emailSignInStart({email,password});
}

const handleChange = (e) => {
 
    const {value , name} = e.target;
    console.log(name,value)
    if(name === 'email')  { setEmail(value) }
    if(name === 'password') { setPassword(value) }
    console.log(password)
} 

return (
    loggingIn ? ( <Redirect to='/' /> 
    ) : (
    <div className='sign-in'>
       <h2>I already have an account</h2>
       <span>Sign with your email and password</span>
       <form onSubmit={handleSubmit}>
           <FormInput name='email' label='email' type="email" required='true' value={email} handleChange={handleChange} />
           <FormInput name='password' label='password' type="password" required='true' value={password} handleChange={handleChange} />
           <CustomButton type="submit" inverted={true}>Sign In </CustomButton>
           <CustomButton onClick={googleSignInStart} type='button' isGoogleSignIn={true}>Sign In with Google</CustomButton>
       </form>
    </div>)
    );
}

const mapStateToProps = (state) => ({
    loggingIn : state.user.loggingIn
  })

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart(email,password)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);

