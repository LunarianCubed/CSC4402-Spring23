var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

var app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM trucks_delivering ";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/users/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userName = req.body.userName;
    const userType = req.body.userType;
    const sqlInsert = "INSERT INTO users (Email,Password,UserName,UserType) VALUES (?,?,?,?)";
    db.query(sqlInsert, [email, password, userName, userType], (err, result) => {
        console.log(err);
    });
});




app.post('/users/login', (req, res) => {
    const { username, password } = req.body;

    pool.query(`SELECT * FROM users WHERE userName = '${username}' AND password = '${password}'`, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else if (results.length === 0) {
            res.status(401).send('Invalid Credentials');
        } else {
            const { id, username, email, userType } = results[0];
            res.json({ id, username, email });
        }
    });
});

module.exports = router;
