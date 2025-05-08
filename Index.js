const express = require('express');
const HTTP_SERVER = express();
const RecipeRouter = require('./Routers/reciperouter');
require('./db');

const { logReqResponceMiddleware } = require('./Middlewares/logs');

HTTP_SERVER.use(express.json()); // Enables JSON body parsing

// Apply log middleware BEFORE the router
HTTP_SERVER.use(logReqResponceMiddleware);

HTTP_SERVER.use('/', RecipeRouter);

HTTP_SERVER.listen('3000', (err) => {
    if (err) {
        console.log('Server connection error', err);
    } else {
        console.log('server connected');
    }
});
