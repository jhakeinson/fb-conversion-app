import HttpClient from './httpClient';
import EventData from '../types/EventData';

export default class EventAPI extends HttpClient {
    protected TOKEN = 'EAA8xL32uHU8BALXRozNgNqLLb5SrKkCI1RuFqRLMDVPiWwkZCNkbgCGSox03DDO65Ix0b3mafe1VLMEuxNrIWz3ZBR9nxrbrQUB6ww7F3AbOVglhD4ZAADjAI08xZAn3C2X2bhsXNpEvufo7IeX0hSnevinhKHG3HxR5074ZCnhrQe4fsNXnL';
    protected PIXEL_ID = '191842526257962';

    protected path = `/${this.PIXEL_ID}/events?access_token=${this.TOKEN}`;

    public constructor() {
        super(`https://graph.facebook.com/v11.0`);
    }

    public postEvent = (evt: EventData) => {
        // const payload = {
        //     data: [
        //         {
        //             "event_name": evt.eventName,
        //             "event_time": evt.eventTimestamp,
        //             "user_data": { 
        //                 "em": evt.userData?.email,
        //                 "ph": evt.userData?.phone,
        //                 "ln": evt.userData?.lastName,
        //                 "fn": evt.userData?.firstName,
        //                 "client_ip_address": evt.userData.ipAddress,
        //                 "client_user_agent": evt.userData.userAgent
        //             },
        //             "action_source": evt.actionSource
        //         }
        //     ]
        // }

        const payload = {
            data: [evt]
        };

        return this.instance.post(this.path, payload);
    };
}
