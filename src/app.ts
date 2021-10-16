import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from "express";
import cors from 'cors';
import * as mw from "./middlewares/auth";

import dbConnect from './configs/db';
import router from "./routers";


const app: Application = express();
const PORT: string = process.env.API_PORT || "3001";

const publicPaths = [
    '/login',
    '/signup'
];

app.use(express.json());
app.use(cors());
app.use(mw.verifyToken.unless({path: publicPaths}));
app.use(mw.handleAuthError)
app.use('', router);

app.listen(PORT, (): void => {
    console.log(`Server listening to port ${PORT}...`);
    dbConnect();
});
