import express, {NextFunction, Request, response, Response} from 'express';
import bodyParser from 'body-parser';
// @ts-ignore
import {DragonType} from "dragons/src/dragonType";
// import { DynamicsWebApi } from "dynamics-web-api";
import { autoFormatDataKeys, getDynamicsWebApi
} from '@churchofjesuschrist/amulek-cumorah';
import axios from "axios";

const dynamicsWebApi = getDynamicsWebApi('misamulek-dev');

const dragonsController = express();
dragonsController.use(bodyParser.json());

const collection =  'vincent_MonsterApp_dragons';

dragonsController.get('/api/:dragonID',(req: Request, res: Response, next: NextFunction) => {
    let dragon; // const dragon: DragonType = res??
    console.log(req.params);
    res.send(dragon)
});

//get all
dragonsController.get('/all',async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("above await");
        const response = await dynamicsWebApi.retrieve({
            collection: 'new_dragons'
        });
        console.log("after await");
        console.log(response);

        const dragons = response.value;
        console.log(dragons);
        const formattedDragons = autoFormatDataKeys(dragons, 'new');
        console.log("formatted dragons", formattedDragons);
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

dragonsController.post('/api/post',(req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    return res.sendStatus(200);

});

dragonsController.delete('/api/delete/:dragon',(req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
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