const express= require('express');
const route=express.Router();
const user5a=require('../models/user5a');

//comenzamos a crear nuestros endpoints
//primer end point obtener todos los usuarios
route.get('/', async (req,res)=>{
    try {
        const users= await user5a.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

//generamos un endpoint para insertar un dato
route.post('/', async (req,res)=>{
    try {
        const user= new user5a(req.body);
        await user.save();
        res.json(user);
        
    } catch (error) {
        res.status(500).send(error.message);       
    }
})

module.exports=route;