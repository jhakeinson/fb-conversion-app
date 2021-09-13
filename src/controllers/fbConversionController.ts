import {Request, Response} from "express";
import { SHA256, enc } from "crypto-js";

import EventAPI from '../api/eventAPI';

import UserData from "../types/UserData";
import EventData from "../types/EventData";
import CustomData from "../types/CustomData";
import Content from "../types/Content";

const currentTime = Math.floor(new Date().valueOf() / 1000);

const user: UserData = {
    fn: hashString('Jhake'),
    ln: hashString('Inson'),
    em: hashString('jhake@demo.com'),
    client_ip_address: '192.168.1.1',
    ph: hashString('1234-5678'),
    client_user_agent: 'Test 1/1'
}

const event: EventData = {
    "event_name": "PageView",
        "event_time": currentTime,
        "user_data": user,
        "action_source": "website"
};

const eventAPI = new EventAPI();

const postPageView = async (req: Request, res: Response) => {
    let data = {};
    let status = 200;

    try {
        const response = await eventAPI.postEvent(event);
        data = response.data;
    } catch(err: any) {
        data = err.response.data;
        status = err.response.status;
    }

    return res.status(status).json(data);
}

const customEvent123 = async (req: Request, res: Response) => {
    const customData: CustomData = {
        content_name: 'Sample',
        content_category: 'Demo',
        contents: [{id: '123', quantity: 1, item_price: 123}],
        value: 123,
        currency: 'USD'
    }

    event.custom_data = customData;

    let data = {};
    let status = 200;

    try {
        const response = await eventAPI.postEvent(event);
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
    customEvent123
};
