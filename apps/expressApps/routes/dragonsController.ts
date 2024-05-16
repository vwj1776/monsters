import express from 'express';
import bodyParser from 'body-parser';

const dragonsController = express();
dragonsController.use(bodyParser.json());

dragonsController.get('/', (req, res) => {
    return res.send("in dragon controller");
});

dragonsController.post('/', (req, res) => {
    console.log(req.body);
    return res.sendStatus(200); // thats and ok code i think
})

export default dragonsController;