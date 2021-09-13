import UserData from "./UserData";
import CustomData from "./CustomData";

export default interface EventData {
    event_name: string;
    event_time: number;
    action_source: string;
    action_source_url?: string;
    user_data: UserData;
    custom_data?: CustomData;
}