import "./BeforeApp.css"
import React, {useState} from 'react'
import App from "./App.jsx";
import Home from "./Home.jsx";
import SignIn from "./SignIn.jsx";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


const BeforeApp = () => {

    const [user, setUser] = useState({
        
    })

    return (
        <div className = "BeforeApp">
            
            <Router>
                <Switch>
                    <Route exact path = "/"> 
                    {
                        user && user._id ? <Home /> : <SignIn setUser = {setUser} />
                    }
                    </Route>

                    <Route path = "/SignIn"> 
                        <SignIn setUser = {setUser} /> 
                    </Route>

                    <Route path = "/App">
                         <App /> 
                    </Route>
                </Switch>
            </Router>
                
           
        </div>
    )
}

export default BeforeApp
