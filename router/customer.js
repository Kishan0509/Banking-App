const express=require("express");
const customer_list = require("../controllers/customers");

const router=express.Router();

router.get("/",async(req,res)=>{
    const customers=await customer_list.fetch_customers(req,res);
    res.render("customers",{layout:false,customers:customers});
})

module.exports = router;