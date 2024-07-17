const express=require("express");
const transfer = require("../controllers/transfer");

const router=express.Router();

router.get("/",async(req,res)=>{
    const customers=await transfer.fetch_customers(req,res);
    const username = await transfer.get_user(req,res);
    res.render("transfer",{layout:false,customers:customers, username:username});
})

router.post("/",async(req,res)=>{
    await transfer.add_transaction(req,res);
    res.redirect("/success");
})

module.exports = router;