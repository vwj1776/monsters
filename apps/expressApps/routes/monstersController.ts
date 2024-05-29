import express, {NextFunction, Request, Response} from 'express';
import bodyParser from 'body-parser';
// @ts-ignore
import {monsterType} from "monsters/src/monsterType";
import {autoFormatDataKeys, getDynamicsWebApi} from "@churchofjesuschrist/amulek-cumorah";



console.log('Power app client id', process.env.POWER_APP_CLIENT_ID);
const dynamicsWebApi = getDynamicsWebApi('misamulek-dev');

const monstersController = express();
monstersController.use(bodyParser.json());

monstersController.get('/api/:monsterID',(req: Request, res: Response, next: NextFunction) => {
    let monster; // const monster: monsterType = res??
    console.log(req.params);
    res.send(monster)
});


//get all
monstersController.get('/all',async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("above await");
        const response = await dynamicsWebApi.retrieve({
            collection: 'new_monsters'
        });
        console.log("after await");
        console.log(response);
        console.log()
        const monsters = response.value;
        console.log(monsters);
        const formattedMonsters = autoFormatDataKeys(monsters, 'new');
        console.log("formatted monsters", formattedMonsters);
        res.send(formattedMonsters);
    } catch (error) {
        console.error('Error retrieving monsters:', error);
        next(error);
    }
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