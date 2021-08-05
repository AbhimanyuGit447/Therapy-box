const express = require ("express");
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrl = require('./routing/route');
const cors = require('cors');


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("database connected success")
})

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/app', routeUrl)


app.post("/SignIn", (req, res) => {
    res.send("Sign in successfull")
})

app.post("/App", (req, res) => {
    res.send("SignUp successfull")
})

app.listen(process.env.PORT || 4000, () => {
    console.log("server is running")
})

