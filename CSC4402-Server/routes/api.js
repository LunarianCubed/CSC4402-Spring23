const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// INPUT THE HOST,USER,PASSWORD,DATABASE ON LOCAL COMPUTER
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "trucker",
});


db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');

    connection.query("SHOW TABLES LIKE 'users'", (err, result) => {
        if (err) throw err;

        if (result.length === 0) {
            console.log('Table "users" does not exist. Creating table...');

            const createTableSql = `
        CREATE TABLE users (
          username VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL PRIMARY KEY ,
          password VARCHAR(255) NOT NULL,
          userType ENUM('truck', 'costumer') NOT NULL,
          PRIMARY KEY (username)
        )
      `;
            connection.query(createTableSql, (err, result) => {
                if (err) throw err;
                console.log('Table "users" created successfully!');
            });
        } else {
            console.log('Table "users" already exists.');
        }
    });
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM trucks_delivering ";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/submit", (req, res) => {
    const email = req.body.email;
    const date = req.body.date;
    const coNum = req.body.columnNumeber;
    const equimentType = req.body.equimentType;
    const originCity = req.body.originCity;
    const originState = req.body.originState;
    const destinationCity = req.body.destinationCity;
    const destinationState = req.body.destinationState;
    const miles = req.body.miles;
    const truckCost = req.body.truckCost;
    const type = req.body.type;

    const sqlInsert =
        "INSERT INTO trucks_delivering (Email,DateAvailable,CoNumber,EquipmentType,OriginCity,OriginState,DestinationCity,DestinationState,Miles,TruckCost,Type) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    db.query(
        sqlInsert,
        [
            email,
            date,
            coNum,
            equimentType,
            originCity,
            originState,
            destinationCity,
            destinationState,
            miles,
            truckCost,
            type,
        ],
        (err, result) => {
            console.log(err);
        }
    );
});


app.get("/api/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userName = req.body.userName;
    const userType = req.body.userType;
    const sqlInsert = "INSERT INTO users (Email,Password,UserName,UserType) VALUES (?,?,?,?)";
    db.query(sqlInsert, [email, password, userName, userType], (err, result) => {
        console.log(err);
    });
});




app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    pool.query(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else if (results.length === 0) {
            res.status(401).send('Invalid Credentials');
        } else {
            const { id, username, email } = results[0];
            res.json({ id, username, email });
        }
    });
});



module.exports = app;
