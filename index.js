const express = require('express')
const app = express();
app.use(express.json())
app.use(express.text())
require('/Decode Full stack Web Dev/TODO-LIST/ROUTES/routes.js')(app)
app.listen(5050,()=>{
    console.log('Server started... ')
})