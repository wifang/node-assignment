import express, { Application } from 'express';
import bodyParser from "body-parser";

const app: Application = express();

//  Init Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Define Routes
app.use('/api/v1/parse', require('./routes/api/v1/parse'));
app.use('/api/v2/parse', require('./routes/api/v2/parse'));

app.listen(5000, () => {
    console.log("Server running");
})
