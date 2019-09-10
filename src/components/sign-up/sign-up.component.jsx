import React,{Component} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth,createUserProfileDocument} from '../../firebase/firebase.util';

class SignUp extends Component { 

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            displayName:'',
            confirmPassword:''
        }
    }
    
handleSubmit = async e => {
    e.preventDefault();
    const {displayName,email,password,confirmPassword} = this.state;
    console.log(displayName,email,password,confirmPassword);
    if(password !== confirmPassword)
    {
        window.alert("both password don't match");
        return;
    }
    const { user } = await auth.createUserWithEmailAndPassword(email,password);
    //console.log(user);
    await createUserProfileDocument(user,{displayName}).then(console.log('signned up successfully')).catch((err) => {console.log(err)})
    this.setState({
            email:'',
            password:'',
            displayName:'',
            confirmPassword:''
    })
}

handleChange = (e) => {
    console.log('change')
    const {value , name} = e.target;
    this.setState({
        [name]:value 
    })
} 

render(){
    const {displayName,email,password,confirmPassword} = this.state;
    return (
    <div className='sign-up'>
       <h2>I do not have an account</h2>
       <span>Sign Up with your email and password</span>

       <form className='sign-up-form' onSubmit={this.handleSubmit}>
           
           <FormInput name='displayName' label='Display Name' type="text" required='true' value={displayName} handleChange={this.handleChange} />
           <FormInput name='email' label='email' type="email" required='true' value={email} handleChange={this.handleChange} />
           <FormInput name='password' label='password' type="password" required='true' value={password} handleChange={this.handleChange} />
           <FormInput name='confirmPassword' label='confirm password' type="password" required='true' value={confirmPassword} handleChange={this.handleChange} />
           <CustomButton type="submit" >Sign Up</CustomButton>

       </form>
    </div>
    );
 }
}

export default SignUp;