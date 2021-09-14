import dotenv from 'dotenv';
dotenv.config();

import express, {Application} from "express";
import cors from 'cors';

import router from "./routers";


const app: Application = express();
const PORT: string = process.env.PORT || "3001";

app.use(express.json());
app.use(cors());
app.use('', router);

app.listen(PORT, (): void => {
    console.log(`Server listening to port ${PORT}...`);
});
