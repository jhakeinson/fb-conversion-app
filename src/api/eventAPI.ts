import HttpClient from './httpClient';
import EventData from '../types/EventData';

export default class EventAPI extends HttpClient {
    protected TOKEN = 'EAAChdZCN1YusBAC5EYj3ZBKxGS2RFB9Sf7kxHUlU2Cu8G7Jv1s9qob9gHix95rXpb61ufF6bwQZBiS78nmZBXdKDox76bW39CH6FHhcyXeCfyGrowdrZCPJebNf20XPCxrrKn5KA9BLVZBnv8Qn81o6dZA5Kx5tFX75bLIYyoBVO5g4L6gh6TZCSLe9ZAZAL40v98ZD';
    protected PIXEL_ID = '255820799741519';

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
