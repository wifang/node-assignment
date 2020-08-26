import express, { Application } from 'express';
import bodyParser from "body-parser";
import router1  from './routes/api/v1/parse';
import router2  from './routes/api/v2/parse';


const app: Application = express();

//  Init Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Define Routes
app.use('/api/v1/parse', router1);
app.use('/api/v2/parse', router2);

app.listen(5000, () => {
    console.log("Server running");
})
