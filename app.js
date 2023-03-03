const bodyParser = require('body-parser');
const express = require('express')
const sequelize = require('./utlis/database')
const UserDetails = require('./routes/user')
const cors = require('cors')
const app = express()



//middlewares

app.use(bodyParser.json())
app.use(express.static("public"))
app.use(cors())

app.use(UserDetails)


sequelize.sync().then(() => {
    app.listen(4000)
})

