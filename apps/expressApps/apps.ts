import express from 'express';
import cors from 'cors';
import dragonsController from "./routes/dragonsController";
import monstersController from "./routes/monstersController";
import helmet from 'helmet';
// import { DynamicsWebApi } from "dynamics-web-api";
// import { getDynamicsWebApi
// } from '@churchofjesuschrist/amulek-cumorah';
const app = express()


const port = 3000; // why 3000??
const host = process.env.SERVER_URL || 'localhost';



app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/dragons', dragonsController);
app.use('/monsters', monstersController);


app.listen(port, () => {
    console.log(`Now listening on port ${port}.`);
});

export default app;