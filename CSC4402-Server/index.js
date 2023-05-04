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

const users = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "rootroot",
	database: "users",
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
app.get("/api/login", (req, res) => {
	const sqlSelect = "SELECT * FROM user_data ";
	users.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

app.post("/api/signup", (req, res) => {
	const email = req.body.email;
	const pass = req.body.pass;
	const sqlInsert = "INSERT INTO user_data (Email,Password) VALUES (?,?)";
	users.query(sqlInsert, [email, pass], (err, result) => {
		console.log(err);
	});
});

app.post("/api/submit", (req, res) => {
	const email = req.body.email;
	const date = req.body.date;
	const equimentType = req.body.equimentType;
	const originCity = req.body.originCity;
	const originState = req.body.originState;
	const destinationCity = req.body.destinationCity;
	const destinationState = req.body.destinationState;
	const miles = req.body.miles;
	const truckCost = req.body.truckCost;
	const type = req.body.type;

	const sqlInsert =
		"INSERT INTO trucks_delivering (Email,DateAvailable,EquipmentType,OriginCity,OriginState,DestinationCity,DestinationState,Miles,TruckCost,Type) VALUES (?,?,?,?,?,?,?,?,?,?)";
	db.query(
		sqlInsert,
		[
			email,
			date,
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

app.listen(3001, () => {
	console.log("running on port 3001");
});
