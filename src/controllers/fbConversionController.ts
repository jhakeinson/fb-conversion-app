import {Request, Response} from "express";
import { SHA256, enc } from "crypto-js";

import EventAPI from '../api/eventAPI';

import UserData from "../types/UserData";
import EventData from "../types/EventData";
import CustomData from "../types/CustomData";
import Content from "../types/Content";

const eventAPI = new EventAPI();

const postPageView = async (req: Request, res: Response) => {
    let evt:EventData = req.body;
    let status = 200;
    let data = {};

    console.log(evt);

    try {
        const response = await eventAPI.postEvent(evt);
        data = response.data;
    } catch(err: any) {
        data = err.response.data;
        status = err.response.status;
    }

    return res.status(status).json(data);
}

const customEvent = async (req: Request, res: Response) => {
    
    let evt:EventData = req.body;
    let status = 200;
    let data = {};
    
    try {
        const response = await eventAPI.postEvent(evt);
        data = response.data;
    } catch(err: any) {
        data = err.response.data;
        status = err.response.status;
    }

    return res.status(status).json(data);
}

function hashString(str: string) {
    return SHA256(str).toString();
}

export {
    postPageView,
    customEvent
};
