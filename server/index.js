require('./config/connectDB');
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.set('PORT', PORT);


app.use('/api', require('./router'))

app.listen(PORT, (Error) => {
    if (Error) {
        console.log("Erreur is " + Error);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});