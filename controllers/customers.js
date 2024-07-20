const pool=require("../utils/dbconfig");

module.exports.fetch_customers=async (req,res)=>{
    const users=await pool.query("select * from user12");
    return users.rows;
}