const fs = require('fs');
const path = require('path');

const errorLoggerMiddleware = (err, req, res, next) => {
    const folderName = 'Logs';
    const fileName = 'error.txt';

    const folderPath = path.join(__dirname, folderName);
    const filePath = path.join(folderPath, fileName);

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const logMessage = `
[${new Date().toISOString()}]
Method: ${req.method}
URL: ${req.originalUrl}
Message: ${err.message}
Stack: ${err.stack}
------------------------------------------------------------
`;

    try {
        fs.appendFileSync(filePath, logMessage);
    } catch (fileError) {
        console.error('Failed to write error log:', fileError);
    }

    // Pass error to default error handler
    next(err);
};

module.exports = { errorLoggerMiddleware };
