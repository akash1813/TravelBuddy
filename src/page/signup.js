import '../styles/signup.css';
import image from '../images/temperature.png';
import googlelogo from '../images/googlelogo.webp';

function Signup(){

    return(
        <div className='signup'>

            <div className='sidesignup'>
                

            </div>

            <div className='signuppage'>


            <div className='Firsthead'>
        <img src={image}  className='Image'/>
        <h2>TravelBuddy</h2>
        </div>

        <div className='Secondhead'>
            <h2>Create your account</h2>
        </div>

        <div className='Thirdhead'>
            <h2>Have an account?</h2>
            <a href='abc'>Log in now</a>
        </div>  

        <div className='Buttons'>
       
            <button className='Btn1'><img src={googlelogo}  className='Glogo'/>Google</button>
        </div>

        <div className='Fourthhead'>
        <p >---Or with email and password---</p>
        </div>

        <div className='Email'>

            <h4>Email Address</h4>
            <input type='email'className='Emailinput'/>
        </div>

        <div className='Password'>

        <h4>Password</h4>  
        <input type='password'/>
        
        </div>

        <div className='Password'>

        <h4>First Name</h4>  
        <input type='text'/>

</div>


<div className='Password'>

<h4>Last Name</h4>  
<input type='text'/>

</div>

<button className='btn2'>Sign up</button>


</div>

</div>
           
    )



}

export default Signup;