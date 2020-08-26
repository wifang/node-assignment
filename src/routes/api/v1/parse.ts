import express, { Application, Request, Response} from 'express';
import { Client } from '../models/client';

const app: Application = express();
const router = express.Router();

// @route  POST api/v1/parse
// @desc   Parse data
// @access Public 
router.post('/',
  (req:Request, res:Response) => {
    const { data } = req.body; 
    let client: Client = {
        firstName:'',
        lastName:'',
        clientId: ''
    }

    try {
        const arr = data.replace('0000', '0000 ').split(' ');
        client.firstName = arr[0];
        const arr2 = arr[1].replace('000', '000 ').split(' ');
        client.lastName = arr2[0];
        client.clientId = arr2[1];
        

        const resBody = {  
            statusCode: 200,
            data : client,
        };

        res.json(resBody);
     
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
export default router;