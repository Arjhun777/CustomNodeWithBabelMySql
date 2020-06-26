import express from 'express';
import routers from 'Routes/index.js';
import mysql from 'mysql';

const app = express();
const port = process.env.PORT || 5000;

// Create mySql Connection
let mySqlConnection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'toor',
    // database: 'sql_inventory'
});

mySqlConnection.connect((err) => {
    if (err) throw err;
    else console.log('Connected');
});


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routers);

// Server listen initilized
app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
}).on('error', e => {
    console.error(e);
});

export var mySqlCon = mySqlConnection;