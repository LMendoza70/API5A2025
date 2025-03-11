require('dotenv').config();
const express = require('express');
const mongoose=require('mongoose');
const user5aRoute=require('./routes/user5aRoute');

//conectamos con la base de datos 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB Atlas ok'+Port))
  .catch((error) => console.error('Error conectando a MongoDB:', error));

const app=express();
//definimos el puerto para conectarnos
const Port=process.env.PORT||3000;

//creamos un primer midleware para poder manipular json
app.use(express.json());

//solicitamos las rutas para mis end points
app.use('/api/users',user5aRoute);

//endpoint hola mundo
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//escuchamos el puerto
app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})


  