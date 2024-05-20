import express, {NextFunction, Request, Response} from 'express';
import bodyParser from 'body-parser';
// @ts-ignore
import {DragonType} from "dragons/src/dragonType";
const dragonsController = express();
dragonsController.use(bodyParser.json());

dragonsController.get('/api/:dragonID',(req: Request, res: Response, next: NextFunction) => {
    let dragon; // const dragon: DragonType = res??
    console.log(req.params);
    res.send(dragon)
});

//get all
dragonsController.get('/api/dragons',(req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    const dragons: any[] = []; // const dragons: DragonType = []; res??
    res.send(dragons);
});

dragonsController.post('/api/post/:dragon',(req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
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