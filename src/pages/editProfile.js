import React from 'react'
import { Link } from 'react-router-dom';
import './editProfile.scss';

const editProfile = () => {
    return (
        <div>      
        <form>
       
        <div id="main">
          <div id="form">
                        <h2>Hello Mr Someone</h2>  {/*<h2>Hello Mr {name}</h2>*/}
            <label className="label"> Email</label>
            <input name="input" placeholder="Email or username" type="text" /> {/* <input name="input" placeholder="Email" type="text" /> */}
            <label className="label">User Name</label>
             <input name="input" placeholder="User Name" type="password" />
             <label className="label"> Contact </label>
             <input name="input" placeholder="Contact" type="text" />
             <label className="label"> Password</label>
            <input name="input" placeholder="Password" type="password" />
             <label className="label"> Confirm  Password</label>
            <input name="input" placeholder="Confirm Password" type="password" />
            <label for="btn-toggle-1"></label>
            <input name="login" type="submit" value="Update Profile" />
            
            
          </div>
        </div>
            </form>
            </div>
      
    )
}
export default editProfile