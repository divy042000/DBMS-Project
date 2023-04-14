const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port=4500
const query =require('./queries')
const path =require('path')
const pool = require('./dbconfig').pool

// Middleware
app.use(bodyParser.json());
app.set('view engine','ejs'); 
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').__express);



app.get('/moviedashboard',async(req,res)=>{
    console.log("Get Dashboard")
    res.send("This is the movie dashboard");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
setTimeout(() => {
    server.close();
    console.log('Server stopped');
  }, 5000);