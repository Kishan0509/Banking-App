const express=require("express");
const customer_details = require("../controllers/customer_details");

const router=express.Router();

router.get("/",async(req,res)=>{
   const user_details =  await customer_details.get_customer_details(req,res);
   res.render("customer",{layout:false,user:user_details});
})

module.exports = router;