import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Button} from "@material-ui/core"
import axios from "axios";
import "./BeforeApp.css";
import "./App.css"
import BeforeApp from "./BeforeApp.jsx"
import {useHistory} from "react-router-dom"



const App = () => {

    const history = useHistory();

    const[input, setInput] = useState({
        username : '',
        email : '',
        password : '',
        confirmpassword : ''
    })

    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name] : value
            }
        })

    }

    function handleClick(event){
        event.preventDefault();
        const registered = {
            username : input.username,
            email : input.email,
            password : input.password,
            confirmpassword : input.confirmpassword
        }
        axios.post("http://localhost:4000/app/signup", registered).then(response => console.log(response.data))

        setInput({
        username : '',
        email : '',
        password : '',
        confirmpassword : ''
        })
        console.log(input);

        
    }

    
    

    return (
<div>

        <div className = "App">
                <h1>Sign Up</h1>
                <div className = "form-div">
                        <form onSubmit >
                            <input type = "text" placeholder = "username" onChange = {handleChange} name = "username" value = {input.username} className = "form-control form-group" />
                            <input type = "text" placeholder = "email" onChange = {handleChange} name = "email" value = {input.email} className = "form-control form-group" />
                            <input type = "password" placeholder = "password" onChange = {handleChange} name = "password" value = {input.password} className = "form-control form-group" />
                            <input type = "password" placeholder = "confirm password" onChange = {handleChange} name  = "confirmpassword" value = {input.confirmpassword} className = "form-control form-group" />

                            <Button variant = "contained" color = "primary" onClick = {handleClick} >Sign Up</Button>
                            <div>OR</div>
                            <div className = "button" onClick = {() => history.push("/SignIn")}>
                                     Login
                            </div>
                          

                        </form>

                        
                </div>
            
        </div>
        </div>
    )
}

export default App
