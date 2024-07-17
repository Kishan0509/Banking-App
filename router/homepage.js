const express=require("express");

const router=express.Router();

router.get("/",async(req,res)=>{
    res.render("homepage",{layout:false});
})

module.exports = router;