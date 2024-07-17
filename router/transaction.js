const express=require("express");
const transaction_list = require("../controllers/transaction");

const router=express.Router();

router.get("/",async(req,res)=>{
    const transactions=await transaction_list.fetch_transactions(req,res);
    res.render("transaction",{layout:false,transactions:transactions});
})

module.exports = router;