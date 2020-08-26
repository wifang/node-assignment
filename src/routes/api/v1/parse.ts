import express, { Application, Request, Response} from 'express';

const app: Application = express();
const router = express.Router();

// @route  POST api/v1/parse
// @desc   Parse data
// @access Public 
router.post('/',
  (req:Request, res:Response) => {
    const { data } = req.body; 
    try {
        const arr = data.replace('0000', '0000 ').split(' ');
        const firstName = arr[0];
        const arr2 = arr[1].replace('000', '000 ').split(' ');
        const lastName = arr2[0];
        const clientId = arr2[1];

        const resBody = {  
            statusCode: 200,
            data : {
                firstName,
                lastName,
                clientId
            }
        };

        res.json(resBody);
     
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
module.exports = router;