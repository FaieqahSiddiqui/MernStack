require('dotenv').config() //This method attaches the env variables to the process obj

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


//creating express app
const app = express()
const workoutRoutes = require('./routes/workouts')


//This Middleware checks if there is any body attached to the incoming request. (if data was sent to the server)
//This data is then attached to the 'req' object so we can access it in the request handler
app.use(express.json())
app.use(cors())

//running global middleware, next is the function here

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    //listen for requests
    app.listen(process.env.PORT,() =>{
    console.log("Connected to db & Listening on port",process.env.PORT)
    })
 })
 .catch((error)=>{
    console.log(error)
 })


//route handling, reacting to requests (1st api test)
/*app.get('/', (req, res) =>{
    res.json({mssg: 'Welcome to the app'})
})*/



process.env