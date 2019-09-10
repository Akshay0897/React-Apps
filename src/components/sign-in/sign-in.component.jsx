import React,{Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth,signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends Component { 

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    
handleSubmit = async e => {
    e.preventDefault();
    const {email,password} = this.state;
    await auth.signInWithEmailAndPassword(email,password).then(console.log('signed in successfully')).catch((err) => {console.log(err)})
    this.setState({email:'',password:''})
}

handleChange = (e) => {
 
    const {value , name} = e.target;
    this.setState({
        [name]:value 
    })
} 

render(){
    return (
    <div className='sign-in'>
       <h2>I already have an account</h2>
       <span>Sign with your email and password</span>

       <form onSubmit={this.handleSubmit}>
           <FormInput name='email' label='email' type="email" required='true' value={this.state.email} handleChange={this.handleChange} />
           <FormInput name='password' label='password' type="password" required='true' value={this.state.password} handleChange={this.handleChange} />
           <CustomButton type="submit">Sign In </CustomButton>
           <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In with Google</CustomButton>

       </form>
    </div>
    );
 }
}

export default SignIn;