import express from 'express';
import cors from 'cors';
import dragonsController from "./routes/dragonsController";
import monstersController from "./routes/monstersController";

const app = express()


const port = 3101;
const host = process.env.SERVER_URL || 'localhost';



app.use(cors());

app.use('/dragons', dragonsController);
app.use('/monsters', monstersController);

app.listen(port, host, () => {
    console.log(`Now listening on host ${host} on port ${port}.`);
});

export default app;