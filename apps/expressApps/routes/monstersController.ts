import express, {NextFunction, Request, Response} from 'express';
import bodyParser from 'body-parser';
// @ts-ignore
import {monsterType} from "monsters/src/monsterType";
const monstersController = express();
monstersController.use(bodyParser.json());

monstersController.get('/api/:monsterID',(req: Request, res: Response, next: NextFunction) => {
    let monster; // const monster: monsterType = res??
    console.log(req.params);
    res.send(monster)
});


//get all
monstersController.get('/api/monsters',(req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    const monsters: any[] = []; // const monsters: monsterType = []; res??
    res.send(monsters);
});

monstersController.post('/api/post/:monster',(req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    return res.sendStatus(200);

});

monstersController.delete('/api/delete/:monster',(req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    return res.sendStatus(200);
});

async function throwsError(){
    throw new Error('Boy');
}

monstersController.get('/error', async (req: Request, res: Response) => {
    try{
        await throwsError();
        res.sendStatus(200);
    } catch(e) {
        res.status(400).send('Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh monsters');
    }
})

export default monstersController;