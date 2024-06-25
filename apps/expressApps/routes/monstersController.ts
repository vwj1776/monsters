import express, {NextFunction, Request, Response} from 'express';
import bodyParser from 'body-parser';
// @ts-ignore
import {MonsterType} from "monsters/src/monsterType";
import {
    authenticateUser,
    autoFormatDataKeys,
    autoReformatDataKeys,
    getDynamicsWebApi
} from "@churchofjesuschrist/amulek-cumorah";
import {v4 as uuidv4} from "uuid";




console.log('Power app client id', process.env.POWER_APP_CLIENT_ID);
const dynamicsWebApi = getDynamicsWebApi('misamulek-dev');

const monstersController = express();
monstersController.use(bodyParser.json());

const collection =  'new_monsters';


monstersController.get('/api/:monsterId',async (req: Request, res: Response, next: NextFunction) => {
    const {monsterId} = req.params;

    const response = await dynamicsWebApi.retrieve({
        collection: 'new_monsters',
        key: monsterId
    });
    console.log(req.params);
    res.send(response)
});


//get all
monstersController.get('/all',async (req: Request, res: Response, next: NextFunction) => {
    try {

        const response = await dynamicsWebApi.retrieve({
            collection: 'new_monsters'
        });
        // console.log("after await");
        // console.log(response);
        // console.log()
        const monsters = response.value;
        // console.log(monsters);
        const formattedMonsters = autoFormatDataKeys(monsters, 'new');
       // console.log("formatted monsters", formattedMonsters);
        res.send(formattedMonsters);
    } catch (error) {
        //console.error('Error retrieving monsters:', error);
        next(error);
    }
});


monstersController.post('/api/post',
    async (req: any, res) => {
        const monsterId = req.body?.monsterId || uuidv4();
        const monster: MonsterType = {
            ...req.body,
            monsterId
        };

        console.log('in post', monster);

        await dynamicsWebApi.upsert({
            key: `new_monster_id='${monsterId}'`,
            collection,
            data: autoReformatDataKeys(monster, 'new')
        });

        res.send({monsterId});
    });




monstersController.delete('/api/delete/:monsterId',async (req: Request, res: Response, next: NextFunction) => {
    const { monsterId } = req.params; // Extract monsterId from request parameters
    // console.log('----------------------------------------------------', monsterId);
    try {
        const response = await dynamicsWebApi.deleteRecord({
            collection: 'new_monsters',
            key: `new_monster_id='${monsterId}'` // Use the extracted monsterId as the key for the query
        });

        console.log('Monster deleted:', response);
        res.send({ message: 'Monster deleted successfully' });
    } catch (error) {
        console.error('Error deleting monster:', error);
        res.status(500).send({ error: 'Error deleting monster' });
    }
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