const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "E-commerce API",
            version: "1.0.0",
            description: "Documentación de la API para el proyecto E-commerce",
        },
        servers: [
            {
                url: "http://localhost:4000/api", // URL base de tu API
            },
        ],
    },
    apis: ["./routes/*.js"], // Rutas donde están definidos tus endpoints
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
