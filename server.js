const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dbms_project',
  password: 'Divypatel',
  port: 5432,
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// middle ware
app.set('view engine', 'ejs'); // set EJS as the view engine
app.use(express.static('public')); // serve static files in the "public" directory

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('form');
});
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const address = req.body.address;

  // Use a prepared statement to insert the form data into the customers table
  const insertQuery = 'INSERT INTO customer (customer_name, phone_number,cust_email,cust_address) VALUES ($1, $2, $3, $4)';
  const values = [name, phone, email, address];

  pool.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error(err);
      res.send('Error inserting data into database');
    } else {
      console.log('Data inserted successfully');
      res.render('result', { name, phone, email, address });
    } 
  });
});

















// app.get('/', (req, res) => {
//   res.render('home'); // render the EJS template
// });
// // define the name of the function you want to call
// const functionName = 'movie_details';

// // define the input parameters for the function
// const params = ['RRR'];

// // call the function using the pool connection
// pool.connect((err, client, done) => {
//   if (err) throw err;
  
//   // call the function with the given parameters
//   client.query(`SELECT ${functionName}($1)`, params, (err, res) => {
//     done(); // release the connection back to the pool
  
//     if (err) throw err;
    
//     // do something with the result of the function
//       // do something with the result of the function
//     const data = res.rows;
//     console.log(data);
//     // res.render('home', {data});
//     // console.log(res.rows[0]);
//     // console.log(res.rows[1]);
//   });
// });
// app.get('/users', async (req, res) => {
//   try {
//     console.log('Connected Sucess')
//     const client = await pool.connect();
//     const result = await client.query(' select movie_check(\'RRR\')');
//     // const users = result.rows;
//     console.log(result);
//     // const data = {
//     //   movie_id: result.rows[2].movie_id,
//     //   movie_name:result.rows[1].movie_name,
//     //   movie_language: result.rows[1].movie_language,
//     //   movie_hour: result.rows[1].movie_hour,
//     //   genre: result.rows[1].genre
//     // };
//     // 
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// });
// // app.post('/movies', async (req, res) => {
// //   try {
//     const { movie_name, show_time} = req.body;
//     const client = await pool.connect();
//     const result = await client.query('INSERT INTO movies (movie_name, show_time) VALUES ($1, $2)', [movie_name, show_time]);
//     console.log(result);
//     res.status(201).send('Movie added successfully');
//     res.render(__dirname + '/views/movie.ejs', {data});
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error adding movie');
//   }
// });
// app.get('/movie', (req, res) => {
//   res.render('movie.ejs');
// });

// app.post('/movie', async (req, res) => {
//   try {
//     const { movie_id,movie_name, movie_language, movie_hour, genre, description_movie } = req.body;
//     const client = await pool.connect();
//     const result = await client.query('INSERT INTO movie (movie_id,movie_name, movie_language, movie_hour, genre, description_movie) VALUES ($1, $2, $3, $4, $5,$6)', [movie_id,movie_name, movie_language, movie_hour, genre, description_movie]);
//     const movieid = result.rows[result.rows.length - 1].movie_id;
//     res.redirect('/movie');
//     console.log(`Movie ${movie_id} added successfully`);
//     // res.status(201).send(`Movie ${movie_id} added successfully`);
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error adding movie');
//   }
// });

// app.post('/bookings',async(req, res)=>{
//   console.log("Booking");
    

// })




app.listen(4500, () => {
  console.log('App listening on port 4500!');
});
