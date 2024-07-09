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




// console.log('Power app client id', process.env.POWER_APP_CLIENT_ID);
const dynamicsWebApi = getDynamicsWebApi('misamulek-dev');

const tamersController = express();
tamersController.use(bodyParser.json());


tamersController.get('/api/:monsterId',async (req: Request, res: Response, next: NextFunction) => {
    const {monsterId} = req.params;

    const response = await dynamicsWebApi.retrieve({
        collection: 'new_monsters',
        key: monsterId
    });
    // console.log(req.params);
    res.send(response)
});


//get all
tamersController.get('/allMonstersAndDragons',async (req: Request, res: Response, next: NextFunction) => {
    //console.log('in controller')
    try {

        const monsters = await dynamicsWebApi.retrieve({
            collection: 'new_monsters',
            savedQuery: 'd56dfd37-743d-ef11-8409-6045bdd8a9c6'
        });
        const dragons = await dynamicsWebApi.retrieve({
            collection: 'new_dragons',
            savedQuery: '7e0e60af-733d-ef11-8409-6045bdf079a5'
        });

        const monstersList = monsters.value;
        const dragonsList = dragons.value;

        const formattedMonsters = monstersList.map(monster => {
            return {
                monsterId: monster.new_monster_id || monster.new_dragon_id,
                monsterid: monster.new_monsterid || monster.new_dragonid,
                name: monster.new_name,
                tamerId: monster._new_tamer_id_value // Add this line to include the tamer ID
            };
        });

        const formattedDragons = dragonsList.map(dragon => {
            return {
                dragonId: dragon.new_dragon_id || dragon.new_dragon_id,
                dragonid: dragon.new_dragonid || dragon.new_dragonid,
                name: dragon.new_name,
                tamerId: dragon._new_tamer_id_value // Add this line to include the tamer ID
            };
        });



        // Assuming monstersList and dragonsList are arrays
        const combinedList = [
            ...formattedMonsters.map((monster: any) => ({ ...monster, type: 'monster' })),
            ...formattedDragons.map((dragon: any) => ({ ...dragon, type: 'dragon' }))
        ];


        console.log(combinedList);
        res.send(combinedList);
    } catch (error) {
        next(error);
    }
});

tamersController.get('/allTamers',async (req: Request, res: Response, next: NextFunction) => {
    try {

        const response = await dynamicsWebApi.retrieve({
            collection: 'new_monstertamers'
        });
        const tamersList = response.value;
       const formattedTamers = autoFormatDataKeys(tamersList, 'new');
        res.send(formattedTamers);
    } catch (error) {
        next(error);
    }
});









async function throwsError(){
    throw new Error('Boy');
}

tamersController.get('/error', async (req: Request, res: Response) => {
    try{
        await throwsError();
        res.sendStatus(200);
    } catch(e) {
        res.status(400).send('Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh monsters');
    }
})

export default tamersController;