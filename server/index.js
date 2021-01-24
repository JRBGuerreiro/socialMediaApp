const express = require('express')
const app = express()
const userRoute = require('./routes/user')

//using first route --> user
app.use("/user", userRoute)

app.listen(3001, (req, res) => {
    console.log("running")
});
