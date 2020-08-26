import express, { Application, Request, Response} from 'express';
import { Client } from '../models/client';
const app: Application = express();
const router = express.Router();

// @route  POST api/v2/parse
// @desc   Parse data
// @access Public 
router.post('/',
  (req:Request, res:Response) => {
    const { data } = req.body; 
    let client: Client = {
        firstName:'',
        lastName:'',
        clientId: ''
    };
    try {
        const ar = data.split(/0{3,4}/);
        client.firstName = ar[0];
        client.lastName = ar[1];
        let clientId = ar[2];
        const cleaned = ('' + clientId).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{4})$/);
        if (match){
            client.clientId = match[1] + '-'+ match[2];  
        }
       
        const resBody = {  
            statusCode: 200,
            data : client
        };

        res.json(resBody);
     
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
export default router;