const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Divypatel',
  port: 5432,
});

const express = require('express');
const app = express();

// middle ware
app.set('view engine', 'ejs'); // set EJS as the view engine
app.use(express.static('public')); // serve static files in the "public" directory



app.get('/k', function(req, res) {
  res.render('home');
});


app.get('/users', async (req, res) => {
  try {
    console.log('Connected Sucess')
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM movie');
    // const users = result.rows;
    console.log(result.rows);
    const data = {
      movie_id: result.rows[1].movie_id,
      movie_name:result.rows[1].movie_name,
      movie_language: result.rows[1].movie_language,
      movie_hour: result.rows[1].movie_hour,
      genre: result.rows[1].genre
    };
    res.render(__dirname + '/views/home.ejs', {data});
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

app.listen(5000, () => {
  console.log('App listening on port 3000!');
});
