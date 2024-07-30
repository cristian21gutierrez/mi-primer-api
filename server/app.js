const express = require ("express");
const cors = require ("cors");
const {connected} = require ("../database/connect");
require("dotenv").config();
const userRoutes = require('../routes/userRoutes');


const app = express(); 
const port = process.env.PORT||3000;

app.use(cors());

app.use(express.json());

connected();

// Rutas
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });