const express = require ("express");
const app = express();
const mysql = require('mysql');


const db = mysql.createPool({
    host: 'vehicleservice-db.cp0iihjfbf4i.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Admin1234',
    database: 'db_vehicle_service'
  });
  
app.get("/",(req,res)=>{
    const sqlInsert = "INSERT INTO DeliveryRequest(DeliveryID,OrderID,Name,Phone,Address,City,Province) VALUES('2','3','Shehan','0799025511','76/b Thudella','Kandana', 'Western')";
    db.query(sqlInsert,(err,result) =>{
    res.send("hello world");
    })
});

app.listen(3001,() => {
    console.log("running on port 3001");
});