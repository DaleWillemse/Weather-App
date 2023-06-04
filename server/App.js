//Config File
require('dotenv').config();

//Port can't be the same as client/app
const PORT = process.env.PORT;

//Build express server
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //Recieves json file

require('./routes/api/weatherApi.js');

//Check to see if express server is running
app.get('/', function(req, res){
    res.send("API is working");
});

//runs server
app.listen(PORT, (error) => {
    if(error){
        console.log(error.message);
    };
    console.log(`Server is running on port: ${PORT}`);
})


