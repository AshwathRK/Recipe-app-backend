const express = require('express');
const HTTP_SERVER = express();
const RecipeRouter = require('./Routers/reciperouter');
require('./db');

const { logReqResponceMiddleware } = require('./Middlewares/logs');
const { errorLoggerMiddleware } = require('./Middlewares/errorLoggerMiddleware');

HTTP_SERVER.use(express.json()); // Enables JSON body parsing

// 1. Log requests and responses
HTTP_SERVER.use(logReqResponceMiddleware);

// 2. Mount your routers
HTTP_SERVER.use('/', RecipeRouter);

// 3. Log any errors after routing
HTTP_SERVER.use(errorLoggerMiddleware);

// 4. Send generic error response to client
HTTP_SERVER.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: err.message
    });
});

HTTP_SERVER.listen(3000, (err) => {
    if (err) {
        console.log('Server connection error', err);
    } else {
        console.log('Server connected on port 3000');
    }
});
