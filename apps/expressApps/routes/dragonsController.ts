import express, {NextFunction, Request, response, Response} from 'express';
import bodyParser from 'body-parser';
// @ts-ignore
import {DragonType} from "dragons/src/dragonType";
import { DynamicsWebApi } from "dynamics-web-api";
import {
    authenticateUser, autoFormatDataKeys, autoReformatDataKeys, getDynamicsWebApi
} from '@churchofjesuschrist/amulek-cumorah';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const dynamicsWebApi = getDynamicsWebApi('misamulek-dev');

const dragonsController = express();
dragonsController.use(bodyParser.json());

const collection =  'new_dragons';

dragonsController.get('/api/:dragonID',(req: Request, res: Response, next: NextFunction) => {
    let dragon; // const dragon: DragonType = res??

    res.send(dragon)
});

//get all
dragonsController.get('/all',async (req: Request, res: Response, next: NextFunction) => {
    try {
       // console.log("above await");
        const response = await dynamicsWebApi.retrieve({
            collection: 'new_dragons'
        });


        const dragons = response.value;
       // console.log(dragons);
        const formattedDragons = autoFormatDataKeys(dragons, 'new');
      //  console.log("formatted dragons", formattedDragons);
        res.send(formattedDragons);
    } catch (error) {
        console.error('Error retrieving dragons:', error);
        next(error);
    }
});

// dragonsController.post('/api/post/:dragon',(req: Request, res: Response, next: NextFunction) => {
//     console.log(req.params);
//     return res.sendStatus(200);
//
// });



dragonsController.post('/api/post',
    async (req: any, res) => {

        const dragonId = req.body?.dragonId || uuidv4();
        console.log('in post', req.body);

        const dragon: DragonType = {
            ...req.body,
            dragonId
        };


        await dynamicsWebApi.upsert({
            key: `new_dragon_id='${dragonId}'`,
            collection,
            data: autoReformatDataKeys(dragon, 'new')
        });

        res.send({dragonId});
    });

dragonsController.delete('/api/delete/:dragon',(req: Request, res: Response, next: NextFunction) => {
    //console.log(req.params);
    return res.sendStatus(200);
});

async function throwsError(){
    throw new Error('Boy');
}

dragonsController.get('/error', async (req: Request, res: Response) => {
    try{
        await throwsError();
        res.sendStatus(200);
    } catch(e) {
        res.status(400).send('Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
    }
})

export default dragonsController;