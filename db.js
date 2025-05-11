const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection successful'))
.catch((error) => console.error('MongoDB connection error:', error));
