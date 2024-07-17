const pool=require("../utils/dbconfig");

module.exports.get_customer_details=async (req,res)=>{
    const user_id = req.query.user_id;
    const user_details = await pool.query("select * from user12 where user_id=$1",[user_id]);
    return user_details.rows;
};