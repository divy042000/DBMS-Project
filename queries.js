// const { pool } = require("./dbconfig");
// const getmovienamebyid=async(movie_id)=>{
//     try{
//         const queryText = 'SELECT * FROM movie where movie_id=$1';
//         const result = await db.query(queryText,[movie_id]);
//         if(result.rows.length===0)
//         {
//             throw new Error('User not found');
//         }
//         return result.rows[0];
//     }
//     catch (err) {
//      throw err;
//     }
// }