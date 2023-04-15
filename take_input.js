const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const port = 4500;

// set up the EJS template engine
app.set('view engine', 'ejs');

// use the body-parser middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// define a route to handle GET requests to the form
app.get('/home', (req, res) => {
    res.render('home'); // render the EJS template
  });

  // define a route to handle POST requests from the form
app.post('/submit', (req, res) => {
    const movie = req.body.movie;
    const showtime = req.body.showtime;
    console.log(`Movie: ${movie}`);
    res.send(`Movie: ${movie}`);
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });