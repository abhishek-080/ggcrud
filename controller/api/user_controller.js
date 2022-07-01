const db = require("../config");
const { successResponse,errorResponse} = require("../../utils/response");
// get users

const getUsers = (req,res)=>{
    db.query("SELECT * FROM user",(err,result)=>{
        if(err){
            errorResponse(res,err,"Error in getting users");
        }else{
            successResponse(res,result,"User fetched successfully");
        }
    })
}

const getUser = (req,res)=>{
    db.query("SELECT * FROM user WHERE id = ?",[req.params.id],(err,result)=>{
        if(err){
            errorResponse(res,err,"Error in getting user");
        }else{
            successResponse(res,result,"User fetched successfully");
        }
    })
}

const createUser = (req,res)=>{
    const {username,password} = req.body;
    db.query("INSERT INTO user (username,password) VALUES (?,?)",[username,password],(err,result)=>{
        if(err){
            errorResponse(res,err,"Error in creating user");
        }else{
            successResponse(res,[],"User created successfully");
        }
    });
}

const updateUser = (req,res)=>{
    const {username,password} = req.body;
    db.query("UPDATE user SET username = ?,password = ? WHERE id = ?",[username,password,req.params.id],(err,result)=>{
        if(err){
            errorResponse(res,err,"Error in updating user");
        }else{
            successResponse(res,[],"User updated successfully");
        }
    });
}

const deleteUser = (req,res)=>{
    db.query("DELETE FROM user WHERE id = ?",[req.params.id],(err,result)=>{
        if(err){
            errorResponse(res,err,"Error in deleting user");
        }else{
            successResponse(res,[],"User deleted successfully");
        }
    });
}

module.exports={ 
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}