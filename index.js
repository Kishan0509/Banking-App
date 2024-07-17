require('dotenv').config()
const express = require("express");
const homepage = require("./router/homepage");
const customers = require("./router/customer");
const customer_details = require("./router/customer_details");
const transfer = require("./router/transfer");
const transaction = require("./router/transaction");
const success = require("./router/success");

const app = express();

const PORT = process.env.PORT;



app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

app.use("/",homepage);
app.use("/customers",customers);
app.use("/customer_details",customer_details);
app.use("/transfer",transfer);
app.use("/transaction",transaction);
app.use("/success",success);

app.listen(PORT,(req,res)=>{
    console.log(`Server started on port ${PORT}`);
});