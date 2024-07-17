const pool=require("../utils/dbconfig");

module.exports.fetch_transactions=async (req,res)=>{
    const transactions=await pool.query("select transaction_id,sender,reciever,amount,to_char(date,'YYYY-MM-DD HH24:MI:SS') as date from transaction12");
    return transactions.rows;
}

