const pool=require("../utils/dbconfig");

const fetch_customers=async (req,res)=>{
    const user_id = req.query.user_id;
    const users=await pool.query("select * from user12 where user_id!=$1",[user_id]);
    return users.rows;
}

const get_user = async(req,res)=>{
    const user_id = req.query.user_id;
    const user = await pool.query("select * from user12 where user_id=$1",[user_id]);
    return user.rows[0];
}

const add_transaction = async(req,res)=>{
    const from = req.body.from;
    const user_id = req.body.userid;
    const to = req.body.to;
    const amount = req.body.amount;
    let to_name = await pool.query("select name from user12 where user_id=$1",[to]);
    to_name = to_name.rows[0].name;
    const date = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    let balance = await pool.query("select balance from user12 where user_id=$1",[user_id]);
    console.log("balance",balance.rows[0].balance);
    balance = balance.rows[0].balance - amount;
    console.log("balance",balance);

    let recieverbalance = await pool.query("select balance from user12 where user_id=$1",[to]);
    recieverbalance = Number(recieverbalance.rows[0].balance) + Number(amount);
    console.log("reciver balance",recieverbalance);

    await pool.query("insert into transaction12(sender,reciever,amount,date) values($1,$2,$3,$4)",[from,to_name,amount,date]);
    await pool.query("update user12 set balance=$1 where user_id=$2",[recieverbalance,to]);
    await pool.query("update user12 set balance=$1 where user_id=$2",[balance,user_id]);
}

module.exports = {fetch_customers,get_user,add_transaction};