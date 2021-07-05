const express = require('express');
// const apiRoutes = require('/apiRoutes/routes')
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(_dirname));

// require('./routes/apiRoutes')

app.listen(PORT, function(){
    console.log('app listening PORT: " + PORT')
});;