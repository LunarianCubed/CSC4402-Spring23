const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// INPUT THE HOST,USER,PASSWORD,DATABASE ON LOCAL COMPUTER
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "trucker",
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
  const coNum = req.body.columnNumber;
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
      console.log(result);
    }
  );
});

app.delete("/api/delete/:UniqueJobId", (req, res) => {
  const id = req.params.UniqueJobId;
  const sqlDelete = "DELETE FROM trucks_delivering WHERE UniqueJobId = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      console.log("Deleted Row");
    }
  });
});

app.put("/api/update/:UniqueJobId", (req, res) => {
  const email = req.body.email;
  const date = req.body.date;
  const coNum = req.body.columnNumber;
  const equimentType = req.body.equimentType;
  const originCity = req.body.originCity;
  const originState = req.body.originState;
  const destinationCity = req.body.destinationCity;
  const destinationState = req.body.destinationState;
  const miles = req.body.miles;
  const truckCost = req.body.truckCost;
  const type = req.body.type;
  const UniqueJobId = req.params.UniqueJobId;

  const sqlUpdate =
    "UPDATE trucks_delivering SET Email = ?, DateAvailable = ?, CoNumber = ?, EquipmentType = ?, OriginCity = ?, OriginState=?, DestinationCity = ?, DestinationState = ?, Miles = ?, TruckCost = ?, Type = ? WHERE UniqueJobId = ?";
  db.query(
    sqlUpdate,
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
      UniqueJobId,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.put("/api/update/:UniqueJobId", (req, res) => {
  const email = req.body.email;
  const UniqueJobId = req.params.UniqueJobId;

  const sqlUpdate =
    "UPDATE trucks_delivering SET Email = ? WHERE UniqueJobId = ?";
  db.query(sqlUpdate, [email, UniqueJobId], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
