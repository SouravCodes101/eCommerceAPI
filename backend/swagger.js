import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  swaggerDefinition: {
    info: {
      title: 'eCommerce REST API',
      version: '1.0.0',
      description: 'Documentation for the eCommerce REST API',
    },
  },
  apis: ['app.js', './routes/*.js'],
};

const specs = swaggerJsdoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
