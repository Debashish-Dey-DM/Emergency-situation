import React, {useState, useEffect} from 'react';
import './DemoLogin.css'
import Services from './services'
import Loading from '../Component/Loading'
//import Login from '../Component/Sdata/Login'
import {facebookProvider, googleProvider} from '../config/authMethods'
import socialMediaAuth from '../config/auth'
import { Form, Button } from 'react-bootstrap';

import home from "../images/home.png";
import './Login.scss';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [district, setDistrict] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [signUpMode, setSignUpMode] = useState(false);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [msg, setMsg] = useState();
    const [isLoading, setIsLoading] = useState();
    const [phone, setPhone] = useState();
    const [data, setData] = useState();
    const [img, setImg] = useState();
    const[type, setType] = useState();
    let token = localStorage.getItem("token")
    const loginCheck = async () => {
        setIsLoading(true);
        console.log("called");
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/userlogincheck' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const responseData = await response.json();
        if(response.ok) {
            setLoggedIn(true)
            setData(responseData.user.user.name)
        }
        else {
            setLoggedIn(false)
            console.log("Token Error")
        }
        }
        catch {
            console.log("Catch")
        }
        setIsLoading(false)
    };
    function App() {
        useEffect(() => {
            if(token){
                loginCheck()
            }
            
        }, []);
    } 
    App();
    const signUpHandler = async e => {
        setIsLoading(true)
        e.preventDefault();

        try{
        const response = await fetch('https://helping-backend.vercel.app/api/' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                phone: phone,
                email: email,
                password: password,
                district
            })
            
        });
        //const resposneData = await response.json();
        console.log(response)
        if(response.ok) {setSignUpMode(false); setMsg("Signp Successfull. Please Login")}
        else if (response.status===400) {setMsg("Email already exists")}
        else if (response.status===401) {setMsg("Phone already exists")}
        else {setMsg("Something Bad, Contact Developers");}
        setIsLoading(false)
        
    }
    catch {
        setIsLoading(false)
    }
    }

    const loginHandler = async e => {
        setIsLoading(true)
        console.log(e)
        if(e) {e.preventDefault()}

        try{

        const response = await fetch('https://helping-backend.vercel.app/api/login' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                type: type
            })
            
        });
        const responseData = await response.json();
        if(response.ok) {
            setLoggedIn(true)
            setData(responseData.name)
        }
        else {setMsg("Wrong Credentials")}
        setIsLoading(false)
        localStorage.setItem("name", JSON.stringify(responseData.session))
        localStorage.setItem("token", JSON.stringify(responseData.jsontoken))
        
    }
    catch {
        setIsLoading(false)
    }
    
    
    };
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const firstNameChange = e =>{
        setFirstName(e.target.value);
    }
    const lastNameChange = e =>{
        setLastName(e.target.value);
    }
    const phoneChange =  e =>{
        setPhone(e.target.value);
    }
    const districtChange =  e =>{
        setDistrict(e.target.value);
    }
    const modeToggle = () => {
        setSignUpMode(!signUpMode)
    }

    const handleOnClick = async (provider)=>{
        const res = await socialMediaAuth(provider)
        if(res.uid){
        setIsLoading(true)

        try{

        const response = await fetch('https://helping-backend.vercel.app/api/login' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: res.email,
                password: "password",
                type: "social"
            })
            
        });
        const responseData = await response.json();
        if(response.ok) {
            setLoggedIn(true)
            setData(responseData.name)
        }
        else {setMsg("You are not Registered!!")}
        setIsLoading(false)
        localStorage.setItem("name", JSON.stringify(responseData.session))
        localStorage.setItem("token", JSON.stringify(responseData.jsontoken))
        
    }
    catch {
        setIsLoading(false)
    }

        }
        else{setMsg("User not found")}
    }
    return(
        <>
            
        <form>
        <div id="header">
          <div class="logo">
            <img src={home} class="home " alt=""/>
          </div>
        </div>
        <div id="main">
          <div id="form">
            <h2>Log in to continue.</h2>
            <input name="input" placeholder="Email or username" type="text" />
            <input name="input" placeholder="Password" type="password" />
            <p>
              <a href="#">Reset Password</a>
            </p>
            <h5>Remember me</h5>
            <input
              class="btn-toggle btn-toggle-round"
              id="btn-toggle-1"
              name="remember"
              type="checkbox"
            />
            <label for="btn-toggle-1"></label>
            <input name="login" type="submit" value="Log in" />
            <div class="liner"></div>
            <div class="linel"></div>
            <input name="lif" type="submit" value="Continue with Facebook" />
            <input name="lig" type="submit" value="Continue with Google" />
            
            <p class="ending">
              Don't have an account? <a href="/signup2">SIGNUP</a>
            </p>
          </div>
        </div>
      </form>
        </>
    )
}

export default Login;