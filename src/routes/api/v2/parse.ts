import express, { Application, Request, Response, NextFunction} from 'express';

const app: Application = express();
const router = express.Router();

// @route  POST api/v2/parse
// @desc   Parse data
// @access Public 
router.post('/',
 async (req:Request, res:Response) => {
    const { data } = req.body; 
    try {
        let ar = data.split(/0{3,4}/);
        let firstName = ar[0];
        let lastName = ar[1];
        let clientId = ar[2];
        let cleaned = ('' + clientId).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{4})$/);
        if (match){
            clientId = match[1] + '-'+ match[2];  
        }
       
        
        let resBody = {  
            statusCode: 200,
            data : {
                firstName,
                lastName,
                clientId
             }
        };

        res.json(resBody);
     
    } catch(err){
        console.log(err.message);
        res.status(500).send('Server error');
    }
});
module.exports = router;