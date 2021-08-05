import React, {useState} from 'react';
import "./SignIn.css";
import {Button} from "@material-ui/core"
import axios from "axios"
import {useHistory} from "react-router-dom"


const SignIn = ({setUser}) => {

    const history = useHistory();

    const[input, setInput] = useState({
        username : '',
        password : ''
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

    function handleClick(event) {

        const registered = {
            username : input.username,
            password : input.password  
        }

        axios.post("http://localhost:4000/app/SignIn", registered)
        .then(response => {
         alert(response.data.message)
         setUser (response.data.registered)
         history.push("/Home")
        })

    }

    return (

        <div className = "SignIn">
                <h1>THERAPY ~ BOX</h1>
                <input type = "text" placeholder = "Type your Username" onChange = {handleChange} name = "username" value = {input.username}></input>
                <input type = "password" placeholder = "Type a unique password" onChange = {handleChange} name = "password" value = {input.password}></input>
                <Button style={{width: '80%', backgroundColor: 'yellow', borderRadius: 10}} onClick = {handleClick} >Login</Button>
                <div>
                    <hr></hr>
                   <p>OR</p> 
                </div>
                <div className = "button" onClick = {() => history.push("/App")}>
                        New to the challenge? Sign up 
                </div>
        </div>

    )
    }

export default SignIn
