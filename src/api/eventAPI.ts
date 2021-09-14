import HttpClient from './httpClient';
import EventData from '../types/EventData';
import * as env from 'env-var';


export default class EventAPI extends HttpClient {
    protected TOKEN = env.get('ACCESS_TOKEN').asString();
    protected PIXEL_ID = env.get('PIXEL_ID').asString();

    protected path = `/${this.PIXEL_ID}/events?access_token=${this.TOKEN}`;
    
    public constructor() {
        super(`https://graph.facebook.com/v11.0`);
    }

    public postEvent = (evt: EventData) => {

        const payload = {
            data: [evt]
        };

        return this.instance.post(this.path, payload);
    };
}
