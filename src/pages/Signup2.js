import React from 'react'
import './Signup2.scss';
import home from "../images/home.png";
export const Signup2 = () => {
    return (
        <div>
            <div class="logo">
            <img src={home} class="home " alt=""/>
          </div>
            <form >
        <div id="header">
          
        </div>
        <div id="main">
          <div id="form">
            <h2>SignUp</h2>
            <input
              name="input"
              placeholder="First Name"
              type="text"
              
              
            />
            <input
              name="input"
              placeholder="Last Name"
              type="text"
              
            />
            <input
              name="input"
              placeholder="Email"
              type="text"
              
            />
            <input
              name="input"
              placeholder="Password"
              type="password"
             
            />
            <input
              name="input"
              placeholder="Confirm Password"
              type="password"
              
            />
            <label for="btn-toggle-1"></label>
            <input name="login" type="submit" value="Sign Up" />
            <div class="liner"></div>
            <div class="linel"></div>
            <input name="lif" type="submit" value="Continue with Facebook" />
            <input name="lig" type="submit" value="Continue with Google" />
            
            <p class="ending">
              Already Have an account? <a href="/login">LOGIN</a>
            </p>
          </div>
        </div>
      </form>
        </div>
    )
}
export default Signup2;