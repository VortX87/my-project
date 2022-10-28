const { buildDB } = require('./populateDatabase')
const express = require('express')
const { Movie, User } = require('./models')
// const { usersRouter, moviesRouter } = require('./routes')
const app = express()
buildDB()

// app.use((req, res, next) => {
//     console.log(req)
//     next()
// })

app.use(express.json())
// app.use("/movies", moviesRouter)
// app.use("/users", usersRouter)


app.listen(5000, () => {
    console.log('The server is running on http://localhost:5000')
})