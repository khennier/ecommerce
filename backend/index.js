require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adoptionRouter = require('./routes/adoption.router'); // Importa el archivo del router

const app = express();
const port = process.env.PORT || 4000;
const swaggerConfig = require('./config/swagger');

swaggerConfig(app); // Llama al módulo para configurar Swagger


// Middleware
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.error("Error conectando a MongoDB:", err));

// Rutas principales
app.use('/api', adoptionRouter); // Todas las rutas se usarán bajo /api

// Servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;

