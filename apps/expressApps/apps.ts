import express from 'express';
import cors from 'cors';
import dragonsController from "./routes/dragonsController";
import monstersController from "./routes/monstersController";
import helmet from 'helmet';
const app = express()


const port = 3000; // why 3000??
const host = process.env.SERVER_URL || 'localhost';



app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(express.urlencoded({extended: true} ));
app.use('/dragons', dragonsController);
app.use('/monsters', monstersController);

app.listen(port, host, () => {
    console.log(`Now listening on host ${host} on port ${port}.`);
});

export default app;