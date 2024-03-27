const express=require('express');


const router=express.Router();

const getStudent=require('./getData')

const port=3001
const host='localhost'


router.get('/',(req,res)=>{
    const students= getStudent(req,res);
    
})

module.exports=router